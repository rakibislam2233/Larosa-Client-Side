import React, { useEffect } from "react";
import Pdf from "react-to-pdf";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = React.createRef();
  return (
    <>
      <div className="w-full pt-24">
      <div className="w-full h-full text-black flex justify-center">
    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="py-2 px-5 bg-teal-500 rounded-full text-white font-semibold" onClick={toPdf}>Download Pdf</button>}
      </Pdf>
    </div>
        <div ref={ref}  className="w-2/4 mx-auto p-10">
          <div className="py-2">
            <h3 className="text-2xl font-semibold text-black">
              Question 1:Differences between uncontrolled and controlled
              components
            </h3>
            <h3 className="text-black">
              Ans:
              <br />
              <span className="font-semibold">Controlled Component</span> : A
              controlled component is bound to a value, and its changes will be
              handled in code by using event-based callbacks. Here, the input
              form element is handled by the react itself rather than the DOM.
              <br />
              <span className="font-semibold">Uncontrolled Component</span> : It
              is similar to the traditional HTML form inputs. Here, the form
              data is handled by the DOM itself. It maintains their own state
              and will be updated when the input value changes.
            </h3>
          </div>
          <div className="py-2">
            <h3 className="text-2xl font-semibold text-black">
              Question 2:How to validate React props using PropTypes
            </h3>
            <h3 className="text-black">
              Ans:
              <br />
              React PropTypes is a library that provides a way to validate the
              props passed to a React component. By validating the props, you
              can ensure that the expected data types and shapes are being
              passed to the component, which helps to catch bugs early and
              improve the overall reliability of your application. React is a
              JavaScript library used for creating interactive web frontend
              applications. It is one of the most popular libraries because of its easy-to-use API. 
            </h3>
          </div>
          <div className="py-2">
            <h3 className="text-2xl font-semibold text-black">
              Question 3:Difference between nodejs and express js
            </h3>
            <h3 className="text-black">
              Ans:
              <br />
              <span className="font-semibold">Node Js</span> : Node.js is
              defined as “a platform built on Chrome’s JavaScript runtime for
              easily building fast, scalable network applications.” Simply put,
              Node.js is an open-source and multi-platform environment that lets
              you build server-side applications and tools by using JavaScript.
              Node.js brought JavaScript to the next level. While JavaScript is
              used as a client-side development language, Node.js covers the
              server-side programming
              <br />
              <span className="font-semibold">Express.js</span> : Express.js is
              a minimal, flexible, and open-source Node.js web application
              framework. You can use it on top of Node.js to ensure better web
              functionality. Express is the most popular Node.js web framework.
              What it provides is a vast set of features for building web
              applications (single, multi-page, and hybrid).
            </h3>
          </div>
          <div className="py-2">
            <h3 className="text-2xl font-semibold text-black">
              Question 4:What is a custom hook, and why will you create a custom
              hook?
            </h3>
            <h3 className="text-black">
              Ans:
              <br />A custom hook is a reusable function in React that allows
              you to encapsulate and share stateful logic between components.
              Custom hooks are a powerful tool in React because they help to
              simplify and modularize code by allowing you to extract common
              functionality into a separate function, which can then be reused
              across multiple components. Custom hooks are created by following
              the naming convention of starting the function name with the word.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
