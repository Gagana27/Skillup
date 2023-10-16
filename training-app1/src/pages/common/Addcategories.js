import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [subcategoryName, setSubcategoryName] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState([]);
  const [author, setAuthor] = useState("");
  const [priceDetails, setPriceDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [image, setImage] = useState([]);

  //subcategory
  const handleAddSubcategory = () => {
    setSubcategoryName([...subcategoryName, ""]);
  };
  const handleSubcategoryNameChange = (index, value) => {
    const newSubcategoryName = [...subcategoryName];
    newSubcategoryName[index] = value;
    setSubcategoryName(newSubcategoryName);
  };
  // video
  const handleAddVideo = () => {
    setUrl([...url, ""]);
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
      const categoryResponse = await axios.post(
        "http://localhost:5000/categories",
        {
          name: categoryName,
          img: imageUrl,
          subcategories: subcategoryName.filter(Boolean),
          priceDetails:priceDetails
        }
      );

      console.log("category111", categoryResponse);
      const subcategoryId = categoryResponse.data.subcategories[0]._id;
      // Add the new video to the subcategory
      const videoResponse = await axios.post(
        `http://localhost:5000/subcategories/${subcategoryId}/videos`,
        {
          title,
          url,
          author,
          description,
          priceDetails,
          reviews,
          ratings,
          image,
        }
      );
      setCategoryName("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <div class="min-h-screen bg-white flex">
          <div class="flex-1 flex flex-col py-12 px-4 sm:px-4 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
              <form className="space-y-6 " onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="category-name form-label ">
                    Category name:
                  </label>
                  <input
                    className="form-control"
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
                    className="form-control"
                    type="text"
                    id="category-imageUrl"
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                    required
                  />
                </div>

                {subcategoryName.map((subcategoryName, index) => (
                  <div key={index}>
                    <label htmlFor={`subcategory-name-${index}`}>
                      Subcategory name:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id={`subcategory-name-${index}`}
                      value={subcategoryName}
                      onChange={(event) =>
                        handleSubcategoryNameChange(index, event.target.value)
                      }
                    />
                  </div>

                ))}
                <label htmlFor="category-imageUrl">Price</label>

                <input
                  className="form-control"
                  type="number"
                  placeholder="Price"
                  value={priceDetails}
                  onChange={(event) => setPriceDetails(event.target.value)}
                />
                <div>
                  <label htmlFor="subcategory-imageUrl">ImageUrl:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="subcategory-imageUrl"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required
                  />

                </div>

                <button type="button" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={handleAddSubcategory}>
                  Add subcategory
                </button>
                <br />
                <div>
                  <label htmlFor="title">Video title:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>
                {/* <div>
                <label htmlFor="category-imageUrl">ImageUrl:</label>
                <input
               className="form-control"
                  type="text"
                  id="category-imageUrl"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  required
                />

              </div> */}
                <label htmlFor="title">Description</label>

                <textarea
                  placeholder="Description"
                  className="form-control"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <label htmlFor="title">Author</label>

                <textarea
                  placeholder="Author"
                  className="form-control"

                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                />
                <label htmlFor="title">Price:</label>

                <input
                  className="form-control"
                  type="number"
                  placeholder="PriceDetails"
                  value={priceDetails}
                  onChange={(event) => setPriceDetails(event.target.value)}
                />
                <label htmlFor="title">Reviews:</label>

                <textarea
                  className="form-control"
                  placeholder="Reviews"
                  value={reviews}
                  onChange={(event) => setReviews(event.target.value)}
                />
                <label htmlFor="title">Ratings</label>

                <textarea
                  className="form-control"
                  placeholder="Ratings"
                  value={ratings}
                  onChange={(event) => setRatings(event.target.value)}
                />
                {url.map((url, index) => (
                  <div key={index}>
                    <label htmlFor={`url-${index}`}>video url:</label>
                    <input
                      className="form-control"
                      type="text"
                      id={`url-${index}`}
                      value={url}
                      onChange={(event) =>
                        handleVideoChange(index, event.target.value)
                      }
                    />
                  </div>
                ))}


                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleAddVideo}>
                  Add url
                </button>
                <br />

                <button type="submit" class=" w-full  bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add</button>
              </form>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
};
export default AddCategory;
