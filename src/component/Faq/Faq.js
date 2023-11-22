import React from "react";
import "./Faq.css";

const Faq = () => {
   return (
      <div className="faq">
         <h1>FAQ</h1>
         {/* Question 01 */}
         <div className="faq__content">
            <h3 className="faq__question">
               What is the difference between <span>props vs state</span> in react js?
            </h3>
            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>'props' Role</h4>
                  <p>
                     01. <span>'props'</span> (short for properties) are a mechanism for passing
                     data from a parent component to its child component.
                  </p>
                  <p>
                     02. They are immutable and are passed down from the parent to the child
                     component.
                  </p>
               </div>

               <div className="faq__concept">
                  <h4>'props' Uses</h4>
                  <p>
                     01. <span>'props'</span> are used to communicate information from a
                     higher-level component (parent) to a lower-level component (child).
                  </p>
                  <p>
                     02. They enable the composition of components, allowing for the creation of
                     complex UI structures from simpler building blocks.
                  </p>
               </div>
            </div>

            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>'state' Role</h4>
                  <p>
                     01. <span>'state'</span> represents the internal state of a component and is
                     used for managing dynamic data that may change over time.
                  </p>
                  <p>02. It is mutable and controlled by the component itself.</p>
               </div>

               <div className="faq__concept">
                  <h4>'state' Uses</h4>
                  <p>
                     01. <span>'state'</span> is employed to handle and respond to user
                     interactions, manage component-specific data, and trigger re-renders when the
                     state changes.
                  </p>
                  <p>02. Components can initialize, update, and consume their own state.</p>
               </div>
            </div>
         </div>

         {/* Question 02 */}
         <div className="faq__content">
            <h3 className="faq__question">
               How does <span>useState()</span> work?
            </h3>
            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>01. Initialization</h4>
                  <p>
                     01. <span>'useState'</span> is a function that takes an initial value as its
                     argument and returns an array with two elements. Example: <br />
                     <code>const [state, setState] = useState(initialValue);</code>
                  </p>
                  <p>
                     02. The first element ('state') is the current state value, and the second
                     element ('setState') is a function to update the state.
                  </p>
               </div>

               <div className="faq__concept">
                  <h4>02. Destructuring</h4>
                  <p>
                     The array returned by useState is typically destructured to get the current
                     state value (count) and the function to update the state (setCount). Example:{" "}
                     <br />
                     <code>const [count, setCount] = useState(0);</code>
                  </p>
               </div>
            </div>

            <div className="faq__concept">
               <h4>03. Initial Render</h4>
               <p>
                  During the initial render of the component, the <span>useState</span> hook is
                  called, and the initial value is set as the initial state.
               </p>
            </div>

            <div className="faq__concept">
               <h4>04. Updating State</h4>
               <p>
                  01. When the component needs to update its state, the state updater function
                  (setCount in this example) is called with the new value.
               </p>
               <p>
                  02. React schedules an update, and on the next render, the new state value is
                  used.
               </p>
            </div>

            <div className="faq__concept">
               <h4>05. Re-render</h4>
               <p>
                  01. When the state is updated using the state updater function, React schedules a
                  re-render of the component.
               </p>
               <p>02. During the re-render, the component receives the updated state value.</p>
            </div>
         </div>

         {/* Question 03 */}
         <div className="faq__content">
            <h3 className="faq__question">
               What does <span>useEffect()</span> do except data fetching?
            </h3>
            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>01. Lifecycle Methods Replacement</h4>
                  <p>
                     In class components, lifecycle methods like componentDidMount,
                     componentDidUpdate, and componentWillUnmount are used for various purposes.
                     useEffect can serve as a replacement for these methods in functional
                     components.
                  </p>
               </div>

               <div className="faq__concept">
                  <h4>02. Event Listeners</h4>
                  <p>
                     <span>'useEffect'</span> can be used to set up and clean up event listeners.
                     This is useful for handling events like mouse clicks, key presses, or window
                     resizing.
                  </p>
               </div>
            </div>

            <div className="faq__concept">
               <h4>03. Subscription to External Data</h4>
               <p>
                  If your component subscribes to external data sources, such as web sockets or
                  GraphQL subscriptions, <span>'useEffect'</span> can be used to manage the
                  subscription and cleanup resources when the component unmounts.
               </p>
            </div>

            <div className="faq__concept">
               <h4>04. Timer Functions</h4>
               <p>
                  <span>'useEffect'</span> can be used for managing timers or intervals, such as
                  updating the UI at regular intervals or implementing a countdown timer.
               </p>
            </div>

            <div className="faq__concept">
               <h4>05. Document Title Updates</h4>
               <p>
                  <span>'useEffect'</span> can be used to update the document title dynamically
                  based on component state.
               </p>
            </div>

            <div className="faq__concept">
               <h4>06. Integration with Third-Party Libraries</h4>
               <p>
                  When integrating with third-party libraries that require setup and teardown,
                  <span>'useEffect'</span> can handle the initialization and cleanup.
               </p>
            </div>

            <div className="faq__concept">
               <h4>07. Conditional Effects</h4>
               <p>
                  <span>'useEffect'</span> can be used with dependencies to execute the effect only
                  when specific dependencies change. This allows for conditional logic within the
                  effect.
               </p>
            </div>

            <div className="faq__concept">
               <h4>08. Logging and Debugging</h4>
               <p>
                  <span>'useEffect'</span> can be used for logging or debugging purposes, such as
                  logging component state changes or tracking the rendering frequency of a
                  component.
               </p>
            </div>

            <div className="faq__concept">
               <h4>09. Optimizations</h4>
               <p>
                  <span>'useEffect'</span> can be used to optimize performance by debouncing or
                  throttling expensive operations, ensuring they don't run too frequently.
               </p>
            </div>
            <div className="faq__concept">
               <h4>10. Global State Management</h4>
               <p>
                  In applications using global state management solutions like Redux or Context API,{" "}
                  <span>'useEffect'</span> can be used to dispatch actions or update global state
                  based on local component state changes.
               </p>
            </div>
         </div>

         {/* Question 04 */}
         <div className="faq__content">
            <h3 className="faq__question">
               How does <span>react js</span> work?
            </h3>
            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>01. Component-Based Architecture:</h4>
                  <p>
                     React organizes the UI into components, which are self-contained, reusable
                     building blocks.
                  </p>
                  <p>
                     Components can be class-based or functional, and they manage their own state
                     and lifecycle.
                  </p>
               </div>

               <div className="faq__concept">
                  <h4>02. Virtual DOM:</h4>
                  <p>
                     React uses a virtual representation of the DOM (Document Object Model) known as
                     the Virtual DOM.
                  </p>
                  <p>
                     Instead of directly manipulating the actual DOM, React creates a virtual tree
                     of components and their states.
                  </p>
                  <p>
                     This virtual representation helps optimize updates and improves performance.
                  </p>
               </div>
            </div>

            <div className="faq__concept">
               <h4>03. Declarative Syntax</h4>
               <p>
                  React uses a declarative syntax, meaning that you describe what you want to
                  achieve, and React takes care of updating the DOM to match that description.
               </p>
               <p>
                  This is in contrast to imperative programming, where you specify step-by-step how
                  to achieve a result.
               </p>
            </div>

            <div className="faq__concept">
               <h4>04. React Elements</h4>
               <p>
                  React components render React elements, which are lightweight descriptions of what
                  to render.
               </p>
               <p>Elements are not the actual DOM nodes but are instructions for creating them.</p>
            </div>

            <div className="faq__concept">
               <h4>05. Reconciliation</h4>
               <p>
                  When the state of a component changes, React determines what changes need to be
                  made to the virtual DOM.
               </p>
               <p>
                  React performs a process called reconciliation to efficiently update only the
                  parts of the actual DOM that have changed.
               </p>
            </div>

            <div className="faq__concept">
               <h4>06. State and Props:</h4>
               <p>
                  Components can have local state, managed using the useState hook or setState
                  method in class components.
               </p>
               <p>
                  Components can also receive data from their parent components through props
                  (properties).
               </p>
            </div>

            <div className="faq__concept">
               <h4>07. Unidirectional Data Flow:</h4>
               <p>
                  React enforces a unidirectional data flow. Data flows down from parent components
                  to child components through props.
               </p>
               <p>
                  Changes to data are handled by modifying the state, triggering re-renders of the
                  affected components.
               </p>
            </div>

            <div className="faq__concept">
               <h4>08. Lifecycle Methods (Class Components):</h4>
               <p>
                  Class components have lifecycle methods like componentDidMount,
                  componentDidUpdate, and componentWillUnmount.
               </p>
               <p>
                  These methods allow developers to perform actions at specific points in the
                  lifecycle of a component.
               </p>
            </div>

            <div className="faq__concept">
               <h4>09. Hooks (Functional Components)</h4>
               <p>
                  Functional components can use hooks like useState, useEffect, and others to manage
                  state and side effects.
               </p>
               <p>
                  Hooks were introduced in React 16.8 to provide stateful logic in functional
                  components.
               </p>
            </div>
            <div className="faq__concept">
               <h4>10. React Router (Client-Side Routing):</h4>
               <p>React applications often use React Router for client-side routing.</p>
               <p>
                  React Router allows the creation of single-page applications with multiple views.
               </p>
            </div>
            <div className="faq__concept">
               <h4>11. JSX (JavaScript XML)</h4>
               <p>
                  React uses JSX, a syntax extension that looks similar to XML/HTML, to describe
                  component structure within JavaScript code.
               </p>
               <p>
                  JSX is transpiled to JavaScript using tools like Babel before being executed in
                  the browser.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Faq;
