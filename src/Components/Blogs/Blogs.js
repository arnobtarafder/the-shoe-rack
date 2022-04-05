import React from 'react';
import Footer from '../Footer/Footer';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
        <div className='blogs'>
            <div className='blogs-info'>
            <h1 className='underline text-4xl text-center mb-16'>Frequently Asked Questions</h1>
            <h3 className='text-2xl font-mono font-bold'>1. What is Context API?</h3><br />
                <p><strong>The React Context API</strong> is a way for a react app to effectively produce global variable that can be passes around, this is the alternative to props drilling or moving props from parent to child to current and so on. this is one kind of advanced version of props drilling because here you can direct pass data from parent element to under many childs. <strong>React.createContext()</strong> is all you need. It returns a consumer and provider. The Context API is a React structure that enables you to exchange unique details and assists in solving props-drilling from all levels of your application.</p><br />

            <h3 className='text-2xl font-mono font-bold'>2. What is Semantic Tags?</h3><br />
                <p>
                <strong>Semantic HTML</strong> tags means meaningful tags. That allow you to add meaning to your markup so that search engine screen readers and web browser can make sense of it. By default, user agent reads your content, it doesn't understand the context and meaning. <br /> <strong>Semantic HTML</strong> tags let you serve structure content to your users, which is especially important for on-page SEO and accessibility. <strong>Semantic</strong> tags existed in earlier html versions, the HTML 5 specifications added several new semantic element to the syntax both on the block and inline levels.
                </p><br />

            <h3 className='text-2xl font-mono font-bold'>3. What is the difference among inline and inline-block and block elements?</h3><br />
                <p className='font-thin'>
                <u className='font-medium'><strong>Inline Elements</strong></u>: <br />
                    <>Inline Elements</> occupy is only sufficient width required.  Inline elements allow other inline elements to sit behind. Inline the element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height. It automatically adjusts its height and width <br /><br />
                   
                    <u className='font-medium'><strong>Inline-Block Elements</strong></u>: <br /> 
                    <>Inline-Block Elements</> formatted just like inline elements, where it doesn't start on a new line, you can set width and height values. Padding and Margins added on all four sides.
                    They consume the entire width available irrespective of their sufficiency. they always start on a new line and have top and bottom margins. it does not contain any other elements next to it. <br /><br />
                   
                    <u className='font-medium'><strong>Block Elements</strong></u>: <br />
                    <>Block elements always start on a new line and occupy the full width available. And you can set width and height values. Browser automatically add some space(a margin) before and after the element </>

                </p>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Blogs;