import React, { useState, useEffect } from 'react';
import './recycle.css';


const App = () => {
  const initialGarbageItems = [
    { id: 1, name: 'PlasticBottle', imageUrl: 'https://img.freepik.com/premium-photo/blue-plastic-bottle-with-blue-cap-is-upside-down_772720-5561.jpg?w=2000' },
    { id: 2, name: 'Newspaper', imageUrl: 'https://thumbs.dreamstime.com/b/crumpled-newspapers-full-frame-shot-33911698.jpg' },
    { id: 3, name: 'Aluminum Can', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyws8Cs43AUFESudn0KllSoGuOyoGdmRk5cQ&usqp=CAU' },
  ];

  // State for garbage items and recycle bin
  const [garbageItems, setGarbageItems] = useState(initialGarbageItems);
  const [recycleBin, setRecycleBin] = useState([]);
  const [customItemName, setCustomItemName] = useState('');

  // Load data from local storage on initial render
  useEffect(() => {
    const storedGarbageItems = JSON.parse(localStorage.getItem('garbageItems')) || initialGarbageItems;
    const storedRecycleBin = JSON.parse(localStorage.getItem('recycleBin')) || [];

    setGarbageItems(storedGarbageItems);
    setRecycleBin(storedRecycleBin);
  }, []);

  // Save data to local storage whenever garbageItems or recycleBin change
  useEffect(() => {
    localStorage.setItem('garbageItems', JSON.stringify(garbageItems));
    localStorage.setItem('recycleBin', JSON.stringify(recycleBin));
  }, [garbageItems, recycleBin]);

  const generateRandomName = () => {
    const names = ['Guru', 'Ram', 'Sunil', 'Elango', 'Madhan', 'Lineeth', 'Das', 'Siva', 'David', 'Pradeep'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  // Function to generate a random phone number
  const generateRandomIndianPhoneNumber = () => {
    const firstDigitOptions = ['9', '8', '7', '6'];
    const firstDigit = firstDigitOptions[Math.floor(Math.random() * firstDigitOptions.length)];
    const restOfNumber = Math.floor(3000000000 + Math.random() * 9000000000).toString().slice(0, 9); // Ensure 10 digits
    return `+91-${firstDigit}${restOfNumber}`;
  };
  
  

  const recycleItem = (item) => {
    const updatedGarbageItems = garbageItems.filter((g) => g.id !== item.id);
    setGarbageItems(updatedGarbageItems);

    // Generate a random phone number
    const randomPhoneNumber = generateRandomIndianPhoneNumber();

    alert(`Recycle partner: ${generateRandomName()} (Phone: ${randomPhoneNumber}) will reach you.`);
    setRecycleBin([...recycleBin, { ...item, recycledBy: randomPhoneNumber }]);
  };

  const clearRecycleBin = () => {
    setRecycleBin([]);
  };

  const addCustomItem = () => {
    if (customItemName.trim() !== '') {
      const newItem = {
        id: Date.now(), // Generate a unique ID
        name: customItemName,
        imageUrl: 'custom.png', // You can add a custom image URL
      };

      setGarbageItems([...garbageItems, newItem]);
      setCustomItemName('');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Garbage Recycling</h1>
      </header>
      <div className="container">
        <div className="garbage-list">
          <h2>Garbage Items</h2>
          <div className="items">
            {garbageItems.map((item) => (
              <div className="garbage-item" key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <button onClick={() => recycleItem(item)}>Recycle</button>
              </div>
            ))}
          </div>
          <div className="add-custom-item">
            <input
              type="text"
              placeholder="Add Custom Item"
              value={customItemName}
              onChange={(e) => setCustomItemName(e.target.value)}
            />
            <button onClick={addCustomItem}>Add</button>
          </div>
        </div>
        <div className="recycle-bin">
          <h2>Recycle Bin</h2>
          <button onClick={clearRecycleBin} className="clear-button">
            Clear Recycle Bin
          </button>
          <div className="items">
            {recycleBin.map((item) => (
              <div className="recycle-item" key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Recycled by: {item.recycledBy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
