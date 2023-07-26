import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const TodoForm = ({onAddTodo}) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            onAddTodo({
                id: Date.now(),
                text: inputText,
                completed: false,
            });

            setInputText('')
        }
    };

    const showPlusIcon = inputText.trim() !== '';

    return (
        <form onSubmit={handleSubmit} className='mb-4'>

            <div className='flex items-center w-full border p-4 rounded bg-white text-2xl'>
                <div>
                    {/* {isFocused && (
                        <FontAwesomeIcon 
                            icon={faPlus} 
                            className="text-gray-200 mr-5 cursor-pointer"
                            onClick={handlePlusIcon}
                        />
                    )} */}
                </div>

                <div>
                    {/* Use handleSubmit for the plus icon click */}
                    {showPlusIcon && (
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="text-gray-300 mr-5 cursor-pointer"
                        onClick={handleSubmit}
                    />
                    )}
                </div>
                
                
                <input
                type='text'
                value={inputText}
                onChange={handleInputChange}
                placeholder='What needs to be done?'
                className=' text-[#808080a6] font-normal italic focus:outline-none' 
            /> 

            </div>

            {/* <button type='submit' className="text-[12px] mt-2 px-4 py-2 rounded text-black  border border-[#a52a2a56]">
                Add Todo
            </button> */}
            

        </form>
    );
};

export default TodoForm;