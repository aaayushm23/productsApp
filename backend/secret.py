import os
import binascii

# Generate a 256-bit (32-byte) random string
secret_key = binascii.hexlify(os.urandom(32)).decode()
print(secret_key)
