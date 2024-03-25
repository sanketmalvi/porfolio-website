const BlogPost = ({ title, image, description, url }) => {
  

  return (
    <li className="blog-post-item" onClick={() => window.location.href = `${url}`}>
      <a href="#">
        <figure className="blog-banner-box">
          <img src={image} alt='image' loading="lazy"/>
        </figure>
        <div className="blog-content">
          <h3 className="h3 blog-item-author">{title}</h3>
          <p className="blog-text">{description}</p>
        </div>
      </a>
    </li>
  );
}

export default BlogPost;
