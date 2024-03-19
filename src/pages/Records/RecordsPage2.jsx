import React, { useState } from "react";
import Calendar from "react-calendar";
import { IoIosAdd } from "react-icons/io";


const RecordsPage2 = () => {
  // States for form fields
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("report");
  const [image, setImage] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [uploadedImages, setUploadedImages] = useState([]); // State to store uploaded images

  // State for confirming image removal
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [removingIndex, setRemovingIndex] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new image object with title, date, and type
    const newImage = {
      title,
      date: date.toLocaleDateString(),
      type,
      image,
    };

    // Add the new image to the list of uploaded images
    setUploadedImages([...uploadedImages, newImage]);

    // Clear form fields
    setTitle("");
    setType("report");
    setImage(null);

    // Log the form data (replace this with your API call)
    console.log(newImage);
  };

  // Function to remove an uploaded image
  const removeImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
  };

  // Function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Function to start image removal confirmation
  const startRemoveConfirmation = (index) => {
    setConfirmRemove(true);
    setRemovingIndex(index);
  };

  // Function to cancel image removal confirmation
  const cancelRemoveConfirmation = () => {
    setConfirmRemove(false);
    setRemovingIndex(null);
  };

  // Function to confirm and remove the image
  const confirmRemoveImage = () => {
    if (removingIndex !== null) {
      removeImage(removingIndex);
      cancelRemoveConfirmation(); // Close the confirmation dialog
    }
  };

  return (
    <div>
    <div className="bg-blue-50  container mx-auto p-4 animate-form-in">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4 ">
          <label htmlFor="image" className="text-black block font-semibold">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="text-black w-full py-2 px-3 border-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="text-black block font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-96 h-7 py-2 px-3 mt-3 rounded focus:outline-none focus:ring focus:border-blue-100 border-1 border-solid border-teal-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-black block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-2/3 h-7 py-2 px-3 mt-3  border-1 border-solid border-teal-400 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="date" className="text-black block font-semibold">
            Date
          </label>
          <div className="relative ">
            <input
              type="text"
              readOnly
              value={date.toLocaleDateString()} // Display the date in your preferred format
              className="w-96 h-7 py-2 px-3 mt-3  border-1 border-solid border-teal-400 rounded focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
              onClick={toggleCalendar} // Show calendar when the input is clicked
            />
            {showCalendar && ( // Conditionally render the calendar based on showCalendar state
              <Calendar
                value={date}
                onChange={(date) => {
                  setDate(date);
                  toggleCalendar(); // Hide the calendar once a date is selected
                }}
                className="absolute top-12 left-0 bg-black rounded p-2 border border-gray-300 z-10"
              />
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="text-black block font-semibold">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-96 h-12 pt px-3 mt-3  border-1 border-solid border-teal-400 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="report">
              <IoIosAdd name="report" /> Report
            </option>
            <option value="prescription">
              <IoIosAdd name="prescription" /> Prescription
            </option>
            <option value="invoice">
              <IoIosAdd name="invoice" /> Invoice
            </option>
          </select>
        </div>
        <div className="col-span-2 pl-3 mt-4 space-x-2">
          <button
            type="button"
            className="w-full md:w-auto px-5 pl-3 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 text-xl text-black"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full md:w-auto px-5 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 text-xl text-black"
          >
            Upload
          </button>
        </div>
      </form>

      {/* Display uploaded images */}
      {uploadedImages.length > 0 && (
        <div className="mt-8">
          <h2 className="text-black text-2xl font-semibold mb-4">Uploaded Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedImages.map((img, index) => (
              <div key={index} className="border border-gray-200 p-2 rounded">
                <img src={URL.createObjectURL(img.image)} alt={img.title} className="w-full h-40 object-cover" />
                <p className="text-black text-sm mt-2">Title: {img.title}</p>
                <p className="text-black text-sm">Date: {img.date}</p>
                <p className="text-black text-sm">Type: {img.type}</p>
                <button
                  onClick={() => startRemoveConfirmation(index)}
                  className="mt-2 px-3 py-1 bg-red-500 text-black rounded hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation dialog */}
      {confirmRemove && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-4 rounded-lg">
            <p className="mb-4 text-black text-lg">Are you sure you want to remove this image?</p>
            <div className="flex justify-end">
              <button
                onClick={cancelRemoveConfirmation}
                className="mr-2 px-3 py-1  text-gray-800 rounded hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemoveImage}
                className="px-3 py-1 bg-red-500 text-black rounded hover:bg-red-600 text-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default RecordsPage2;