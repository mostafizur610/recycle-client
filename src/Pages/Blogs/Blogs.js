import React from 'react';
import faq2 from '../../assets/faq/q2.png'
import faq4 from '../../assets/faq/q4.png'

const Blogs = () => {
    return (
        <div className='rounded-xl'>
            <div className="collapse px-12 pt-12">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-success text-white text-xl">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The Four Kinds of React State to Manage
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                        There are four main types of state you need to properly manage in your React apps: <br />

                        1. Local state
                        2. Global state
                        3. Server state
                        4. URL state <br />
                        Let's cover each of these in detail: <br />

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.

                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                </div>
            </div>

            <div className="collapse px-12 pt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-success text-white text-xl">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p> <br />
                    <img src={faq2} alt="" />
                </div>
            </div>

            <div className="collapse px-12 pt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-success text-white text-xl">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />

                        In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p> <br />
                    <p>
                        Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming</p>
                </div>
            </div>
            <div className="collapse px-12 pt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-success text-white text-xl">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p> <br />
                    <img src={faq4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;