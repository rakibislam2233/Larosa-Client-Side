import React from "react";

const Blogs = () => {
  return (
    <div className="w-full pt-24 bg-[#212428]">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-5 py-10">
        <div className="bg-gray-500 p-5 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white">
            Question 1:Differences between uncontrolled and controlled
            components
          </h3>
          <h3 className="text-xl py-2 text-white">
            Ans:
            <br />
            <span className="font-semibold">Controlled Component</span> : A
            controlled component is bound to a value, and its changes will be
            handled in code by using event-based callbacks. Here, the input form
            element is handled by the react itself rather than the DOM. In this,
            the mutable state is kept in the state property and will be updated
            only with setState() method. Controlled components have functions
            that govern the data passing into them on every onChange event
            occurs. This data is then saved to state and updated with setState()
            method. It makes component have better control over the form
            elements and data.
            <br />
            <span className="font-semibold">Uncontrolled Component</span> : It
            is similar to the traditional HTML form inputs. Here, the form data
            is handled by the DOM itself. It maintains their own state and will
            be updated when the input value changes. To write an uncontrolled
            component, there is no need to write an event handler for every
            state update, and you can use a ref to access the value of the form
            from the DOM.
          </h3>
        </div>
        <div className="bg-gray-500 p-5 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white">
            Question 2:How to validate React props using PropTypes
          </h3>
          <h3 className="text-xl py-2 text-white">
            Ans:
            <br />
            React PropTypes is a library that provides a way to validate the
            props passed to a React component. By validating the props, you can
            ensure that the expected data types and shapes are being passed to
            the component, which helps to catch bugs early and improve the
            overall reliability of your application. React is a JavaScript
            library used for creating interactive web frontend applications. It
            is one of the most popular libraries because of its easy-to-use API.
            We combine components into an app by passing data from parent
            components to child components. To do this, we pass data with props.
            Props are like HTML attributes, but they can contain dynamic data. A
            parent component passes props down to child components. And child
            components receive them. We can pass any data as props. Therefore,
            we need a way to validate their data type so that the child
            component gets what they expect. 1.Install the PropTypes library by
            running the following command in your terminal
            <br />
            2.Import PropTypes in your component by adding the following line at
            the top of your file
            <br />
            3.Define the propTypes as a static property of your component by
            adding the following code after your component declaration
          </h3>
        </div>
        <div className="bg-gray-500 p-5 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white">
            Question 3:Difference between nodejs and express js
          </h3>
          <h3 className="text-xl py-2 text-white">
            Ans:
            <br />
            <span className="font-semibold">Node Js</span> : Node.js is defined
            as “a platform built on Chrome’s JavaScript runtime for easily
            building fast, scalable network applications.” Simply put, Node.js
            is an open-source and multi-platform environment that lets you build
            server-side applications and tools by using JavaScript. Node.js
            brought JavaScript to the next level. While JavaScript is used as a
            client-side development language, Node.js covers the server-side
            programming. Thanks to the Node.js, JavaScript has become an
            all-purpose full-stack development language. The JS frontend and
            Node.js backend are easier to keep in sync because of a single
            language used on both sides of the application. Node.js allows your
            programs to be written in JavaScript and to be executed on the
            server. Node.js has become one of the most popular tools in the back
            end development. Enterprise companies like eBay, Netflix, and Uber
            all support the use of Node.js through a personal example.
            <br />
            <span className="font-semibold">Express.js</span> : Express.js is a
            minimal, flexible, and open-source Node.js web application
            framework. You can use it on top of Node.js to ensure better web
            functionality. Express is the most popular Node.js web framework.
            What it provides is a vast set of features for building web
            applications (single, multi-page, and hybrid). With Express, you can
            structure a web application that can handle multiple HTTP requests
            at a certain URL. Flexibility is visible in numerous components
            accessible on a package manager. These components automatically
            persevere into Express.js. The reason why Express is the most
            popular web framework is that it makes the development of web apps,
            websites, and APIs easier. It also offers an underlying collection
            of topographies. With Express.js, you’ll get to hone different
            aspects of the web application. You can determine settings like the
            location of templates that will be used for the response or the port
            that will be used for establishing a connection
          </h3>
        </div>
        <div className="bg-gray-500 p-5 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white">
            Question 4:What is a custom hook, and why will you create a custom hook?
          </h3>
          <h3 className="text-xl py-2 text-white">
            Ans:
            <br />A custom hook is a reusable function in React that allows you
            to encapsulate and share stateful logic between components. Custom
            hooks are a powerful tool in React because they help to simplify and
            modularize code by allowing you to extract common functionality into
            a separate function, which can then be reused across multiple
            components. Custom hooks are created by following the naming
            convention of starting the function name with the word "use". This
            naming convention allows React to recognize the function as a hook
            and apply its rules and benefits. Custom hooks can use other hooks
            and state variables internally and can return any value, including
            state, functions, or even other custom hooks. You might create a
            custom hook for several reasons, such as: To avoid duplicating code
            across multiple components that use similar logic. 1.To keep
            components more focused and maintainable by abstracting away complex
            logic. 2.To share reusable logic with other developers or projects,
            either by publishing a package or sharing it within a team or
            company. 3.To enable testability by making it easier to test the
            functionality of a custom hook in isolation from the rest of the
            application.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
