## Crear bucket
Nombre: faunacloudfront

Ponerlo público

Aceptar que va a ser público

crear

## Conf
Ir al bucket propiedades

Habilitar sitios estaticos

Index document: index.html

http://faunacloudfront.s3-website.us-east-2.amazonaws.com/

## Permissions
Editar bucket policy

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::nextjs-s3-cloudfront-mnm/*"
        }
    ]
}
```

## next config
Revisar next.config.js
