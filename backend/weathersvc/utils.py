import os

def read_env_file(env_path):
    """Read the .env file and set environment variables."""
    with open(env_path) as env_file:
        for line in env_file:
            # Ignore empty lines and comments
            if line.strip() and not line.startswith("#"):
                key, value = line.strip().split("=", 1)
                os.environ[key] = value


