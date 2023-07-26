import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text)
    const [hovered, setHovered] = useState(false);

    const handleEditStart = () => {
        setEditing(true)
    };

    const handleEditChange = (e) => {
        setEditedText(e.target.value);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (editedText.trim() !== '') {
            onEdit(todo.id, editedText);
            setEditing(false);
        }

    };

    return (
        <div className={`bg-white flex items-center border-b border-[#8080803f] py-4 px-5 ${todo.completed ? 'line-through text-gray-400' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                className="mr-4 form-checkbox h-6 w-6 border rounded focus:ring-0"
            /> */}

            <div
                className={`w-6 h-6 border rounded-full cursor-pointer ${
                    todo.completed
                        ? 'bg-transparent border-green-500' // Circle color when completed
                        : 'bg-transparent border-gray-300' // Circle color when not completed
                    } flex items-center justify-center mr-4`}
                    onClick={() => onToggleComplete(todo.id)}
            >
                {todo.completed && (<FontAwesomeIcon icon={faCheck} className="text-green"/>)}

            </div>

            {editing ? (
                <form onSubmit={handleEditSubmit} className="flex-1">
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleEditChange}
                        onBlur={handleEditSubmit}
                        autoFocus
                        className="w-full bg-transparent border-b focus:outline-none"
                    />
                </form>

            ): (
                <div className="flex-1" onDoubleClick={handleEditStart}>
                    {todo.text}
                </div>
            )}

            {hovered && (
                <div className="ml-4">
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="text-[#a52a2abe] text-xl cursor-pointer"
                        onClick={() => onDelete(todo.id)}
                    />
                </div>
            )}

            
        </div>
    );

};

export default TodoItem;