import React from "react"; 
import { Link } from "react-router-dom";
 import { FiChevronRight, FiHome } from "react-icons/fi";
  const Breadcrumb = ({ items = [] }) => { 
    return ( 
    <nav 
    aria-label="Breadcrumb"
     className="w-full bg-white border-b border-gray-100" > 
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> 
        <ol className="flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide"> 
             {/* Home */} 
             <li className="flex items-center"> 
                <Link to="/" 
                className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors" 
                >
                     <FiHome className="text-base" />
                      <span>Home</span> 
                      </Link> 
                      </li> 
                      {/* Breadcrumb Items */} 
                      {items.map((item, index) => { 
                        const isLast = index === items.length - 1;
                         return ( 
                         <React.Fragment key={index}> 
                         <li className="text-gray-400"> 
                            <FiChevronRight className="text-base" /> 
                            </li> 
                            <li> 
                                {isLast ? ( <span className="font-medium text-gray-900">
                                     {item.label}
                                      </span>
                                       ) : ( 
                                       <Link to={item.path}
                                        className="text-gray-500 hover:text-blue-600 transition-colors" >
                                             {item.label}
                                              </Link>
                                               )} 
                                               </li> </React.Fragment>
                                                );
                                             })}
                                             
                                              </ol>
                                               </div> 
                                               </nav> 
                                               );
                                             };
export default Breadcrumb;