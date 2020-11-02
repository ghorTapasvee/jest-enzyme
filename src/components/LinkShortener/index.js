import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { urlsState } from '../../constants/types';
import { getUrlRequest, filterExistingUrl } from '../../redux/actions/url';

const LinkShortener = () => {
    const {loading, urls, url, error} = useSelector(urlsState)

    const [initialUrl, setUrl] = useState("")
    const dispatch = useDispatch()
    // console.log('$$$$$$$$$$',url, urls.length);
    let getShortenUrl = (e) => {
        e.preventDefault()
        if(urls.length){
            let updatedUrl = urls.filter(urlObj=> urlObj.oldUrl === initialUrl)
            if(updatedUrl.length){
                dispatch(filterExistingUrl(initialUrl))
            }else{
                dispatch(getUrlRequest(initialUrl))
            }
        }else{
            dispatch(getUrlRequest(initialUrl))
        }
    }
    return (
        <div className="linkshortener" data-test="linkshortener">
            <form className="linkshortener__form" data-test="linkshortener__form" onSubmit={e => getShortenUrl(e)}>
                <input className="linkshortener__input" data-test="linkshortener__input" type="url" value={initialUrl} onChange={e=>setUrl(e.target.value)}/>
                <button type="submit">Get short url</button>
            </form>
            {loading && <div>loading...</div>}
            {url ? <div data-test="linkshortener__url">{url}</div>: <div>No url</div>}
            {error && <div>{error}</div>}
        </div>
    )
}

export default LinkShortener
