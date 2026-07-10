## Why am I writing this blog post?

It's often times tough and confusing to find a reliable tutorial that deals with these kinds of integrations, especially since **most tutorials use the deprecated way of connecting Django with AWS S3**. The connection is done with a package called `django-storages`, but they have explained in their documentation how Django introduced a change in how static and file storage is configured. You can read about it here:

<https://django-storages.readthedocs.io/en/1.14.6/backends/amazon-S3.html>

These are the packages I am using as of the moment of this writing:

```
boto3==1.38.9
botocore==1.38.9
Django==5.1.1
django-storages==1.14.6
whitenoise==6.9.0
python-decouple==3.8
```

If you're new to this, welcome! If you've been googling for 5 hours how exactly you could configure this, I sincerely welcome you from the bottom of my heart.

### Installing Packages

1. Install necessary packages:

```bash
pip install boto3 django-storages python-decouple whitenoise
```

2. Go to `{project_folder}/settings.py`

3. Add `storages` to your `INSTALLED_APPS`

```python
INSTALLED_APPS = [
    # ... Your other apps
    'storages'
]
```

### Configuring AWS S3 bucket

Let's pause here. We will now configure the AWS S3 endpoint. You can skip this part if you have already done this and you're actually stuck with the Django settings.

First of all, the items we need to configure Django are the following:

- `bucket_name`
- `access_key`
- `secret_key`

#### How do we get these?

That's the first obvious question. You first need to create an AWS account. Then you go inside the AWS S3 service. Let's start with creating the bucket:

1. Click on `Create bucket`

2. Provide a name to the bucket

3. Set it to `General purpose`

4. Set `ACLs disabled`

5. Disable `Block all public access`

6. Create the bucket. Note: The other configurations are irrelevant for the connection to work.

7. Go inside the bucket, and then go to the Permissions tab

8. Configure a bucket policy. It goes as follows:

```js
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::{your-bucket-name}/*"
        }
    ]
}
```

Be sure to replace the value for `your-bucket-name`.

9. We can move on to the IAM service. Inside it, go to `Users` and click on `Create user`

10. Provide a name for this user. This user will represent your Django backend API.

11. Click on `Attach policies directly` and then on `Create policy`

12. Add the inline policy using the JSON editor. The inline policy would be this:

```js
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "Allow",
			"Effect": "Allow",
			"Action": "s3:*",
			"Resource": [
				"arn:aws:s3:::your-bucket-name",
				"arn:aws:s3:::your-bucket-name/*"
			]
		}
	]
}
```

13. Click on `Next` and then on the confirmation page click on `Create user`

14. Now that the user has been created, in the **Summary** section, you will see a button that says `Create access key`. You can also find this setting in the **Security credentials** tab.

15. Click on `Local code` and then `Next`

16. Set the description tag value. This can be anything you want.

17. Now you will get your access key and secret. **Do not lose the secret. You will not be able to see this secret again, so go ahead and copy it in your `.env` file or somewhere safe.** _This value is sensitive and should not be shown to anybody aside from you._

We now have the pieces of data we needed from AWS. Time to go back to Django.

### Finish setting up Django

In `settings.py`, you need to add the following:

```python
from decouple import config

STATIC_URL = 'static/'

STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_DIRS = [
    BASE_DIR / 'api/static',
]

if DEBUG:
    MEDIA_URL = '/media/'
    MEDIA_ROOT = BASE_DIR / 'media'
    STORAGES = {
        "default": {
            "BACKEND": 'django.core.files.storage.FileSystemStorage',
        },
        "staticfiles": {
            "BACKEND": 'whitenoise.storage.CompressedManifestStaticFilesStorage',
        },
    }
else:
    STORAGES = {
        "default": {
            "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
            "OPTIONS": {
                "access_key": config('AWS_ACCESS_KEY_ID'),
                "secret_key": config('AWS_SECRET_ACCESS_KEY'),
                "bucket_name": config('AWS_STORAGE_BUCKET_NAME'),
            },
        },
        "staticfiles": {
            "BACKEND": 'whitenoise.storage.CompressedManifestStaticFilesStorage',
        },
    }
```

With this configuration, `DEFAULT_FILE_STORAGE` and `STATICFILES_STORAGE` would not be used. You can set `STATIC_URL`, `STATIC_ROOT` and `STATICFILES_DIRS` to whatever values you want. The values I provided will work totally fine though.

18. Go to `{project_name}/urls.py` and add the following in order to serve media locally on development:

```python
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
```

### Try out the project

```bash
# for collecting static files. Not related to AWS S3 but important
python manage.py collectstatic

python manage.py runserver
```

Your file uploads should now work with AWS S3. I hope this helped! Good luck out there!
