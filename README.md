
# NatHabitAssignment Repository Setup

## Backend Setup:

1. Clone the repository:

    ```bash
    git clone https://github.com/dugu0011/NatHabitAssignment.git
    ```

2. Change into the cloned directory:

    ```bash
    cd NatHabitAssignment
    ```

3. Create a virtual environment:

    ```bash
    python3 -m venv myenv
    ```

    or

    ```bash
    python -m venv myenv
    ```

4. Activate the virtual environment:

    ```bash
    source myenv/bin/activate
    ```

    After activation, your command prompt should look like:

    ```bash
    (myenv) your-username@your-machine NatHabitAssignment$
    ```

5. Change into the Backend directory:

    ```bash
    cd Backend/weather_forecast
    ```

6. Install requirements:

    ```bash
    pip3 install -r requirements.txt
    ```

7. Run migrations:

    ```bash
    python3 manage.py makemigrations
    ```

    ```bash
    python3 manage.py migrate
    ```

8. Create a superuser:

    ```bash
    python3 manage.py createsuperuser
    ```

9. Run the server:

    ```bash
    python3 manage.py runserver
    ```

## Frontend Setup:

1. Open a new terminal.

2. Change into the Frontend directory:

    ```bash
    cd Frontend
    ```

3. Install Node packages:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

    or

    ```bash
    npm install --force
    ```

4. Run the server:

    ```bash
    npm start
    ```

    Make sure your Python server is running on port 8000. If you're using a different port, update `REACT_APP_BASE_URL` in the `frontend/.env` file accordingly.

**Note:** If you encounter any issues, refer to the attached [video walkthrough] (https://drive.google.com/file/d/1JotIGED1AXXXdGCOXgjRPD5MZDK1U2ul/view?usp=sharing) for a detailed walkthrough of the setup process.
