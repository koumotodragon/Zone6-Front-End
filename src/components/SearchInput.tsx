
import { useRef, LegacyRef } from 'react';
import { Form } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
export const SearchInput = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>();
    const formSubmit = async (e: any) => {
        e.preventDefault();
        if (inputRef.current && inputRef.current.value) {
            const searchParams = new URLSearchParams(search);
            searchParams.set('search', inputRef.current.value);
            searchParams.set('page', "1");
            navigate(`/search?${searchParams.toString()}`);
        }
    }

    return (
        <>
            <Form>
                <input className="form-control" type="search" name="search" placeholder="Search" ref={inputRef as LegacyRef<HTMLInputElement>} />
                <button style={{ display: "none" }} type='submit' onClick={formSubmit}></button>
            </Form>
        </>
    )

}