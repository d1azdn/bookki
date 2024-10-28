import { books } from "../books.js";

function createBooks(req,res){
    const {judul, penulis, penerbit, sinopsis, tahun} = req.body;

    if (judul && penulis && penerbit && sinopsis && tahun) {
        const newBook = req.body;
        const id = books.length;
        const newestBook = {id, ...newBook}

        books.push(newestBook)

        return res.status(201).json({
            message:"Success added books.",
            data: newestBook
        })
    }
    return res.status(400).json({
        message: "Failed to add books.",
        data : "Look out for documentation for field body required."
    })

    
}

function readAllBooks(req,res){
    if(books.length == 0){
        res.status(203).json({message:"Books empty."})
        return
    }
    
    res.status(200).json({
        message:"Success",
        data:books
    })
}

function readOneBooks(req,res){
    const bookId = req.params.id;

    const indexBooks = books.findIndex((books) => books.id == bookId)
    if (indexBooks == -1){
        return res.status(400).json({
            message:"Books not there.",
            data:"Are you sure the book is on the lists?"
        })
    }

    return res.status(200).json({
        message:"Books find.",
        data:books[indexBooks]
    })
}

function editBooks(req,res){
    const bookId = req.params.id;

    const indexBooks = books.findIndex((books) => books.id == bookId)
    if (indexBooks == -1){
        return res.status(400).json({
            message:"Books not there.",
            data:"Are you sure the book is on the lists?"
        })
    }

    const {judul, penulis, penerbit, sinopsis, tahun} = req.body;

    if (judul && penulis && penerbit && sinopsis && tahun) {
        books[indexBooks].judul = judul
        books[indexBooks].penulis = penulis
        books[indexBooks].penerbit = penerbit
        books[indexBooks].sinopsis = sinopsis
        books[indexBooks].tahun = tahun

        return res.status(201).json({
            message:"Success edited books.",
            data: books[indexBooks]
        })
    }
    return res.status(400).json({
        message: "Found books, but failed to edit books.",
        data : "Look out for documentation for field body required."
    })
}

function deleteBooks(req, res){
    const bookId = req.params.id;

    const indexBooks = books.findIndex((books) => books.id == bookId)
    if (indexBooks == -1){
        return res.status(400).json({
            message:"Books not there.",
            data:"Are you sure the book is on the lists?"
        })
    }

    books.splice(indexBooks, 1)
    return res.status(201).json({
        message:"Success delete book.",
        data: books
    })
}


export { createBooks, readAllBooks, readOneBooks, editBooks, deleteBooks};