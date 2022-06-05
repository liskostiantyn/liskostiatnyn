const createMessage = ({
    author = "Guest",
    text,
    reciever,
    time = new Date(),
}) => {
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
  };
  
//   const message = createMessage({"Peter","Hello", "Sam", new Date()});
  
  // после выполнения этого задания, функция должна коректно работать с таким аргументом
  const message = createMessage({
    reciever: "John",
    text: "Hi!",
  });

  console.log(`message`, message)
  