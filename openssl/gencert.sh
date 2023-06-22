echo "Enter the name of key"
read name
#openssl genrsa -des3 -out ${name}.key 2048 #uncomment this to use encrypted certificate
openssl genrsa -out ${name}.key 2048
openssl req -key ${name}.key -new -out ${name}.csr
echo "Enter the dns name"
read dns
cat <<EOF >${name}.ext
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
subjectAltName = @alt_names
[alt_names]
DNS.1 = *.${dns}
EOF
#echo "authorityKeyIdentifier=keyid,issuer\nbasicConstraints=CA:FALSE\nsubjectAltName = @alt_names\n[alt_names]DNS.1 = *.${dns}" > ${name}.ext
openssl x509 -req -CA "rootCA.crt" -CAkey "rootCA.key" -in ${name}.csr -out ${name}.crt -days 365 -CAcreateserial -extfile ${name}.ext
openssl pkcs12 -export -out ${name}.pfx -inkey ${name}.key -in ${name}.crt
#openssl rsa -in ${name}.key -out ${name}.no.key
