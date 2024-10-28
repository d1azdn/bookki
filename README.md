# Miniproject KSM Android - Backend

Tugas TSC KSM Android tentang ExpressJS dan Postman

## Aplikasi Backend sederhana untuk buku perpustakaan

## Untuk menggunakan program, cukup gunakan
```sh
npm install
```

## Format data buku

Berikut adalah format data yang digunakan untuk postingan:
| field    	| Tipe   	| Keterangan                                  	|   	|   	|
|----------	|--------	|---------------------------------------------	|---	|---	|
| id       	| int    	| Required, unik, digenerate di dalam program 	|   	|   	|
| judul 	| String 	| Required                                    	|   	|   	|
| penulis   | String  	| Required                                     	|   	|   	|
| penerbit  | String 	| Required                                    	|   	|   	|
| sinopsis 	| String 	| Required                                    	|   	|   	|
| tahun     | Int       | Required                                  	|   	|   	|

## Ketentuan API

### 1. CREATE (Menambahkan buku)
- **Endpoint**: `/book/create`
- **Method**: `POST`
- **Body Request**:
    ```json
    {
     "judul" : "string",
     "penulis" : "string",
     "penerbit" : "string",
     "sinopsis" : "string",
     "tahun" : int
    },
    ```
- **Response**:
    - **Sukses**:
        - Status: `201 Created`
        - Pesan: `"Success added books."`
        - Data:
        ```json
        {
         "id" : "generated_id",
         "judul" : "string",
         "penulis" : "string",
         "penerbit" : "string",
         "sinopsis" : "string",
         "tahun" : int
        },
        ```
    - **Gagal**:

      ***Format body salah***:
        - Status: `400 Bad Request`
        - Pesan: `"Failed to add books."`

### 2. READ (Melihat Semua Buku)

- **Endpoint**: `/book/all`
- **Method**: `GET`
- **Response**:
    - **Tidak Ada Data**:
        - Status: `400 Not Found`
        - Pesan: `"Books empty."`
    - **Ada Data**:
        - Status: `200 OK`
        - Data:
        ```json
        [
            {
            "id" : "generated_id",
            "judul" : "string",
            "penulis" : "string",
            "penerbit" : "string",
            "sinopsis" : "string",
            "tahun" : int
            },
            ...
        ]
        ```

### 3. READ ID (Melihat Satu Buku Berdasarkan ID)

- **Endpoint**: `/book/:id/read`
- **Method**: `GET`
- **Response**:

    - **Buku Tidak Ada**:
        - Status: `400 Not Found`
        - Pesan: `"Books not there."`

    - **Ada Data**:
        - Status: `200 OK`
        - Data:
        ```json
        [
            {
            "id" : "generated_id",
            "judul" : "string",
            "penulis" : "string",
            "penerbit" : "string",
            "sinopsis" : "string",
            "tahun" : int
            },
        ]
        ```

### 4. UPDATE (Edit Buku)

- **Endpoint**: `/book/:id/edit`
- **Method**: `PUT`
- **Response**:

    - **Buku Tidak Ada**:
        - Status: `400 Not Found`
        - Pesan: `"Books not there."`

    - **Ada Data**:
        - Status: `201 OK`
        - Pesan: `"Success edited books."`
        - Data:
        ```json
        [
            {
            "id" : "edited_id",
            "judul" : "new_string",
            "penulis" : "new_string",
            "penerbit" : "new_string",
            "sinopsis" : "new_string",
            "tahun" : new_int
            },
        ]
        ```

### 5. DELETE (Hapus Buku)

- **Endpoint**: `/book/:id/delete`
- **Method**: `DELETE`
- **Response**:

    - **Buku Tidak Ada**:
        - Status: `400 Not Found`
        - Pesan: `"Books not there."`

    - **Ada Data**:
        - Status: `201 OK`
        - Pesan: `"Success delete books."`
        - Data:
        ```json
        [
            {
            "id" : "generated_id",
            "judul" : "string",
            "penulis" : "string",
            "penerbit" : "string",
            "sinopsis" : "string",
            "tahun" : int
            },
            ... Remaining book lists.
        ]  
        ```

