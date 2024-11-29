import React, { useContext, useState } from 'react';
import { X, MoreHorizontal, UserPlus, Edit2 } from 'react-feather';
import CardAdd from './CardAdd';
import { BoardContext } from '../context/BoardContext';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import AddList from './AddList';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const { allboard, setAllBoard } = useContext(BoardContext);
    const bdata = allboard.boards[allboard.active];
    const [editingListId, setEditingListId] = useState(null);
    const [newListName, setNewListName] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);


    
    function onDragEnd(res) {
        if (!res.destination) return;
        console.log('Source Droppable ID:', res.source.droppableId);
        console.log('Destination Droppable ID:', res.destination.droppableId);
        console.log('Source Index:', res.source.index);
        console.log('Destination Index:', res.destination.index);
        const newList = [...bdata.list];
        const s_id = parseInt(res.source.droppableId);  
        const d_id = parseInt(res.destination.droppableId);

        if (res.type === 'list') {
            
            const [removed] = newList.splice(res.source.index, 1);
            newList.splice(res.destination.index, 0, removed);

            let board_ = { ...allboard };
            board_.boards[allboard.active].list = newList;
            setAllBoard(board_);
        } else {
            
            if (s_id !== d_id) {
                const [removed] = newList[s_id - 1].items.splice(res.source.index, 1);
                newList[d_id - 1].items.splice(res.destination.index, 0, removed); 
            } else {
                const [removed] = newList[s_id - 1].items.splice(res.source.index, 1);
                newList[s_id - 1].items.splice(res.destination.index, 0, removed); 
            }

            let board_ = { ...allboard };
            board_.boards[allboard.active].list = newList;
            setAllBoard(board_);
        }
    }

    const cardData = (e, ind) => {
        let newList = [...bdata.list];
        newList[ind].items.push({ id: uuidv4(), title: e });

        let board_ = { ...allboard };
        board_.boards[board_.active].list = newList;
        setAllBoard(board_);
    };

    const listData = (e) => {
        let newList = [...bdata.list];
        newList.push({ id: (newList.length + 1).toString(), title: e, items: [] });

        let board_ = { ...allboard };
        board_.boards[board_.active].list = newList;
        setAllBoard(board_);
    };

    const handleListNameChange = (id) => {
        setEditingListId(id);
        const currentList = bdata.list.find(list => list.id === id);
        setNewListName(currentList.title); 
    };

    const saveListName = (id) => {
        const updatedList = [...bdata.list];
        const listIndex = updatedList.findIndex(list => list.id === id);
        updatedList[listIndex].title = newListName;

        let board_ = { ...allboard };
        board_.boards[board_.active].list = updatedList;
        setAllBoard(board_);
        setEditingListId(null);
        setNewListName('');
    };

    const deleteList = (listId) => {
        const updatedLists = bdata.list.filter((list) => list.id !== listId);
        let updatedBoard = { ...allboard };
        updatedBoard.boards[allboard.active].list = updatedLists;

        setAllBoard(updatedBoard);
    };
    const openModal = (card) => {
        setSelectedCard(card);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCard(null);
        setModalOpen(false);
    };
    return (
        <div className="flex flex-col w-full" style={{ backgroundColor: `${bdata.bgcolor}` }}>
            <div className="p-3 bg-black flex justify-between w-full bg-opacity-50">
                <h2 className="text-lg">{bdata.name}</h2>
                <div className="flex items-center justify-center">
                    <button className="bg-gray-200 h-8 text-gray-800 px-2 py-1 mr-2 rounded flex justify-center items-center">
                        <UserPlus size={16} className="mr-2" />
                        Share
                    </button>
                    <button className="hover:bg-gray-500 px-2 py-1 h-8 rounded">
                        <MoreHorizontal size={16} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col w-full flex-grow relative">
                <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="board1" direction="horizontal" type="list">
                            {(provided) => (
                                <div
                                    className="flex"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {bdata.list.map((x, ind) => (
                                        <Draggable key={x.id} draggableId={x.id} index={ind}>
                                            {(provided) => (
                                                <div
                                                    className="mr-3 w-60 h-fit rounded-md p-2 bg-black flex-shrink-0"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <div className="list-body">
                                                        <div className="flex justify-between p-1">
                                                            {editingListId === x.id ? (
                                                                <input
                                                                    type="text"
                                                                    value={newListName}
                                                                    onChange={(e) => setNewListName(e.target.value)}
                                                                    onBlur={() => saveListName(x.id)}
                                                                    className="bg-transparent border-none text-white focus:outline-none"
                                                                />
                                                            ) : (
                                                                <span>{x.title}</span>
                                                            )}
                                                                    <div>

                                                                <button
                                                                    onClick={() => handleListNameChange(x.id)}
                                                                    className="hover:bg-red-500 p-1 rounded-sm"
                                                                >
                                                                    <Edit2 size={16} />
                                                                </button>
                                                                <button
                                                                    onClick={() => deleteList(x.id)} 
                                                                    className="hover:bg-red-600 p-1 rounded-sm"
                                                                >
                                                                    <X size={16} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <Droppable droppableId={x.id}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className="py-1"
                                                                    ref={provided.innerRef}
                                                                    style={{
                                                                        backgroundColor: snapshot.isDraggingOver
                                                                            ? '#222'
                                                                            : 'transparent',
                                                                    }}
                                                                    {...provided.droppableProps}
                                                                >
                                                                    {x.items.map((item, index) => (
                                                                        <Draggable key={item?.id} draggableId={item?.id} index={index}>
                                                                            {(provided) => (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    onClick={() => openModal(item)}
                                                                                >
                                                                                    <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                                                                                        <span>{item?.title}</span>
                                                                                        <span className="flex justify-start items-start">
                                                                                            <button className="hover:bg-gray-600 p-1 rounded-sm">
                                                                                                <Edit2 size={16} />
                                                                                            </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </Draggable>
                                                                    ))}
                                                                    {provided.placeholder}
                                                                </div>
                                                            )}
                                                        </Droppable>

                                                        <CardAdd getcard={(e) => cardData(e, ind)} />
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>

                        <AddList getlist={(e) => listData(e)} />
                    </DragDropContext>
                </div>
            </div>
            <Modal show={isModalOpen} onClose={closeModal}>
                {selectedCard && (
                    <div className="p-6 bg-gray-800 rounded-md shadow-md text-white  ">
                        <h2 className="text-2xl font-bold text-center border-b border-gray-600 pb-2">
                            Edit Card
                        </h2>
                        <label className="block text-sm font-medium text-gray-400">
                            Title:
                            <input
                                type="text"
                                value={selectedCard.title}
                                onChange={(e) =>
                                    setSelectedCard({ ...selectedCard, title: e.target.value })
                                }
                                className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-sky-500"
                            />
                        </label>
                        <label className="block text-sm font-medium text-gray-400">
                            Description:
                            <textarea
                                value={selectedCard.description || ''}
                                onChange={(e) =>
                                    setSelectedCard({ ...selectedCard, description: e.target.value })
                                }
                                className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-sky-500"
                                rows="4" cols="30"

                            ></textarea>
                        </label>
                        <label className="block text-sm font-medium text-gray-400">
                            Due Date:
                            <input
                                type="date"
                                value={selectedCard.dueDate || ''}
                                onChange={(e) =>
                                    setSelectedCard({ ...selectedCard, dueDate: e.target.value })
                                }
                                className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-sky-500"
                            />
                        </label>
                        <div className="flex justify-between pt-4">
                            <button
                                onClick={() => {
                                    const updatedList = bdata.list.map((list) => {
                                        list.items = list.items.map((item) =>
                                            item.id === selectedCard.id ? selectedCard : item
                                        );
                                        return list;
                                    });
                                    const updatedBoard = { ...allboard };
                                    updatedBoard.boards[allboard.active].list = updatedList;
                                    setAllBoard(updatedBoard);
                                    closeModal();
                                }}
                                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    const updatedList = bdata.list.map((list) => {
                                        list.items = list.items.filter(
                                            (item) => item.id !== selectedCard.id
                                        );
                                        return list;
                                    });
                                    const updatedBoard = { ...allboard };
                                    updatedBoard.boards[allboard.active].list = updatedList;
                                    setAllBoard(updatedBoard);
                                    closeModal();
                                }}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                            >
                                Delete
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </Modal>



        </div>
    );
};

export default Main;
