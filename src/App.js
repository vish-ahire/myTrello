import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import { BoardContext } from './context/BoardContext';

function App() {
  const [allboard, setAllBoard] = useState(() => {
    const savedBoardData = localStorage.getItem('boardData');
    return savedBoardData ? JSON.parse(savedBoardData) : {
      active: 0,
      boards: [
        {
          name: 'My Trello Board',
          bgcolor: '#1e1e3c69;',//'#069',
          list: [
            { id: "1", title: "To do", items: [{ id: "cdrFt", title: "Project Description 1" }] },
            { id: "2", title: "In Progress", items: [{ id: "cdrFv", title: "Project Description 2" }] },
            { id: "3", title: "Done", items: [{ id: "cdrFb", title: "Project Description 3" }] }
          ]
        }
      ]
    };
  });

  useEffect(() => {
    localStorage.setItem('boardData', JSON.stringify(allboard));
  }, [allboard]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <BoardContext.Provider value={{ allboard, setAllBoard }}>
          <div className="flex-grow flex overflow-y-hidden">
            <Sidebar />
            <Main />
          </div>
        </BoardContext.Provider>
        <Footer />
      </div>
    </>
  )
}

export default App
