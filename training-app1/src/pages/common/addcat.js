
import { useState } from 'react';
import axios from 'axios';
const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [imageUrl, setImageUrl] = useState([]);
    const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    const [subcategoryName, setSubcategoryName] = useState([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState([]);
    const [author, setAuthor] = useState('');
    const [priceDetails, setPriceDetails] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [image, setImage] = useState([]);


    //subcategory
    const handleAddSubcategory = () => {
        setSubcategoryName([...subcategoryName, '']);
    };
    const handleSubcategoryNameChange = (index, value) => {
        const newSubcategoryName = [...subcategoryName];
        newSubcategoryName[index] = value;
        setSubcategoryName(newSubcategoryName);
    };
    // video
    const handleAddVideo = () => {
        setUrl([...url, '']);
    };
    const handleVideoChange = (index, value) => {
        const newUrl = [...url];
        newUrl[index] = value;
        setUrl(newUrl);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Add the new category and subcategory
            const categoryResponse = await axios.post('http://localhost:5000/categories', {
                name: categoryName,
                price: price,
                description: description,
                img: imageUrl,
                subcategories: subcategoryName.filter(Boolean),
            });

            console.log("category111",categoryResponse)
            const subcategoryId = categoryResponse.data.subcategories[0]._id;
            // Add the new video to the subcategory
            const videoResponse = await axios.post(`http://localhost:5000/subcategories/${subcategoryId}/videos`, {
                title,
                url,
                author,
                description,
                priceDetails,
                reviews,
                ratings,
                image
            });
            setCategoryName('');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <> 
        <div class="min-h-screen bg-white flex">
        <div class="flex-1 flex flex-col py-12 px-4 sm:px-4 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">

        <form className="space-y-6 "onSubmit={handleSubmit}>

            <div>
                <label htmlFor="category-name form-label ">Category name:</label>
                <input
                    type="text"
                    id="category-name"
                    value={categoryName}
                    onChange={(event) => setCategoryName(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="category-imageUrl">ImageUrl:</label>
                <input
                    type="text"
                    id="category-imageUrl"
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                    required
                />
            </div>
            <label htmlFor="category-imageUrl">Price</label>


            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            {subcategoryName.map((subcategoryName, index) => (
                <div key={index}>
                    <label htmlFor={`subcategory-name-${index}`}>Subcategory name:</label>
                    <input
                        type="text"
                        id={`subcategory-name-${index}`}

                        value={subcategoryName}
                        onChange={(event) => handleSubcategoryNameChange(index, event.target.value)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddSubcategory}>
                Add subcategory
            </button><br />
            <div>
                <label htmlFor="title">Video title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="category-imageUrl">ImageUrl:</label>
                <input
                    type="text"
                    id="category-imageUrl"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required
                />
            </div>
            <textarea
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <textarea
                placeholder="Author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            />
            <input
                type="number"
                placeholder="PriceDetails"
                value={priceDetails}
                onChange={(event) => setPriceDetails(event.target.value)}
            />
              <textarea
                placeholder="Reviews"
                value={reviews}
                onChange={(event) => setReviews(event.target.value)}
            />
              <textarea
                placeholder="Ratings"
                value={ratings}
                onChange={(event) => setRatings(event.target.value)}
            />
            {url.map((url, index) => (
                <div key={index}>
                    <label htmlFor={`url-${index}`}>video url:</label>
                    <input
                        type="text"
                        id={`url-${index}`}
                        value={url}
                        onChange={(event) => handleVideoChange(index, event.target.value)}
                    />
                </div>
                
            ))}
             
            <div>
                <label htmlFor="title">Author</label>
                <input
                    type="text"
                    id="title"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    required
                />
            </div>
            <button type="button" onClick={handleAddVideo}>
                Add url
            </button><br />

            <button type="submit">Add</button>
            
        </form>
        </div>
        </div>
        </div>
        </>

        
        
    );
};
export default AddCategory;