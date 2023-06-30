
echo "Building Project..."
pip install -r requirements.txt

echo "Making Migrations..."
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput

echo "Collecting Static Files for Production..."
python3.9 manage.py collectstatic --noinput --clear