import React, { useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business ",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submissions
  const handleBookSubmit =(event) => {
       event.preventDefault();
       const form = event.target;

       const bookTitle = form.bookTitle.value;
       const authorName =form.authorName.value;
       const imageURL =form.imageURL.value;
       const category =form.categoryName.value;
       const bookDescription =form.bookDescription.value;
       const bookPDFURL =form.bookPDFURL.value;
          const bookobj ={
            bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL

          } 
       
       console.log(bookobj)
      //  send data to db
      fetch("",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify(bookobj)
      }).then(res => res.json()).then(data=>{
        // console.log(data)
        alert("Book uploaded successfully!!!!")
        form.reset();
      })
  }

  return (
    <div className='px-4 my-12'> 
      <h2 className='mb-8 text-3xl font-bold'>
        Upload A Book
      </h2>

      <form  onSubmit={handleBookSubmit}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
        <div className='flex gap-8'>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" 
                value="Book Title" 
              />
            </div>
            <TextInput id="bookTitle" 
              name='bookTitle'
              type="text" 
              placeholder="Book Name" 
              required />
          </div>

          {/* author name */}

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" 
                value="Author Name" 
              />
            </div>
            <TextInput id="authorName" 
              name='authorName'
              type="text" 
              placeholder="Author Name" 
              required />
          </div>
        </div>

        {/* 2nd row */}
        <div className='flex gap-8'>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" 
                value="Book Image URL" 
              />
            </div>
            <TextInput id="imageURL" 
              name='imageURL'
              type="text" 
              placeholder="Book Image URL" 
              required />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label 
                htmlFor="inputState" 
                value="Book Category" 
              />
            </div>
            <select name="CategoryName" id="inputState" className='w-full rounded ' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="bookDescription" 
                value="Book Description" />
            </div>
            <Textarea
              id="bookDescription" 
              name="bookDescription" 
              placeholder="Write your book description.........." 
              required 
              className='w-full'
              rows={6} 
            />
          </div>
          {/* book pdn link */}
          <div className="mb-2 block">
            <Label 
              htmlFor="bookPDFURL" 
              value="Book PDF URL" />
          </div>
          <TextInput 
            id="bookPDFURL" 
            name="bookPDFURL" 
            type='text'
            placeholder="bookPDFURL"
            required 
          />
        </div>
        <div>
        <button type='submit' className='mt-5 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4'>Upload Book</button>        </div>
      </form>
    </div>
  )
}

export default UploadBook