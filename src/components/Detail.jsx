import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blog from "../assets/blog.js";
const Detail = () => {
  const { id } = useParams();
  const [ title, setTitle ] = useState("")
  const [ image, setImage ] = useState("")
  const [ content, setContent ] = useState("")
  const [ author, setAuthor ] = useState("")
  
  
  useEffect(() => {
    //ดึงข้อมูลบทความ
    const foundItem = blog.find((item) => item.id === parseInt(id));
    setTitle(foundItem.title)
    setImage(foundItem.image_url)
    setContent(foundItem.content)
    setAuthor(foundItem.author)
  }, []);
  return (
    <>
      <div className="container mx-auto py-6">
      <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold font-sans ">{title}</p>
          <img className="h-[400px]" src={image} alt={title}  />
          <p className="text-lg font-medium font-sans mt-4">{content}</p>
          <div className="text-sm font-medium font-sans mt-4 block text-end">By {author}</div>
        </div>
      </div>
    </>
  );
};

export default Detail;
