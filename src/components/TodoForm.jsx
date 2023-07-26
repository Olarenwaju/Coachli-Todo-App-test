import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const TodoForm = ({onAddTodo}) => {
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

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

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <form onSubmit={handleSubmit} className='mb-4'>

            <div className='flex items-center w-full border p-4 rounded bg-white text-2xl'>
                {isFocused && (
                    <FontAwesomeIcon icon={faPlus} className="text-gray-200 mr-5" />
                )}
                

                <input
                type='text'
                value={inputText}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='What needs to be done?'
                className=' text-[#808080a6] font-normal italic focus:outline-none' 
            /> 

            </div>
            

            {/* <button type='submit' className="mt-2 px-4 py-2 rounded bg-blue-500 text-white">
                Add Todo
            </button> */}

        </form>
    );
};

export default TodoForm;