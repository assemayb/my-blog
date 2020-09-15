const Blogs = [
    {
      title: "Blog Zero",
      createdAt: () => {
        const date = new Date(Date.now()).toString()
        const trimmedData = date.slice(0, 15);
        return trimmedData;
      },
      slug: "blog-zero",
    },
  
    {
      title: "Blog One",
      createdAt: () => {
        const date = new Date(Date.now()).toString
        const trimmedData = date.slice(0, 15);
        return trimmedData;
      },
      slug: "blog-one",
    },
  
    {
      title: "Blog Two",
      createdAt: new Date(Date.now()).toString().slice(0, 15),
      slug: "blog-two",
    },
  ];

  console.log(Blogs[2].createdAt)