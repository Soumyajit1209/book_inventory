import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";


const EditBooks = () => {
  const{id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDRURL} = useLoaderData()
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
  const handleUpdate =(event) => {
       event.preventDefault();
       const form = event.target;

       const bookTitle = form.bookTitle.value;
       const authorName =form.authorName.value;
       const imageURL =form.imageURL.value;
       const category =form.categoryName.value;
       const bookDescription =form.bookDescription.value;
       const bookPDFURL =form.bookPDFURL.value;
          const updatebookobj ={
            bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL

          } 
       
      //  update book data
      fetch(``,{
        method:"PATCH",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify(updatebookobj)
      } ).then(res => res.json()).then(data=>{
        // console.log(data)
        alert("Book is updated successfully!!!!")
       
      })
      
  }

  return (
    <div className='px-4 my-12'> 
      <h2 className='mb-8 text-3xl font-bold'>
        Update the book data
      </h2>

      <form  onSubmit={handleUpdate}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
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
              required 
              defaultValue={bookTitle}
              />
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
              required 
              defaultValue={authorName}
              />
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
              required 
              defaultValue={imageURL}
              />
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
              defaultValue={bookDescription}
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
            defaultValue={bookPDFURL}
          />
        </div>
        <div>
        <button type='submit' className='mt-5 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4'>Update Book</button>       
         </div>
      </form>
    </div>
  )
}

export default EditBooks
