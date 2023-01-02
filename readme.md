Cara untuk menjalankan Projek Weeding GuestBook
1. Buka Terminal
2. cd test2
3. Pastikan terminal berjalan difolder test2
4. Buat folder .env seperti contoh di .env example
5. npm install
6. npx sequelize-cli db:migrate untuk migrasi db
7. run dengan cara npm run start


List API
1. Create Note /note/create
    body: {
        name, phoneNumber, description, address
    }
2. List all notes /note (jika ingin melihat nomor dan alamat harus mengisi username dan password dan role = admin pada body)
3. Get note by id /note/:id (jika ingin melihat nomor dan alamat harus mengisi username dan password dan role = admin pada body)
4. Delete note /note/delete/:id (note harus login dengan mengisi username dan password dan role = admin pada body)
5. Sign Up /signup
    body: {
        username, name, role (default: user), password
    }
6. Login /login
    body: {
        username, password
    }
