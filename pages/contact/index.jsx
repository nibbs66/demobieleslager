import React from 'react';
import Client from "../../components/layout/Client";
import ContactForm from "../../components/Contact/ContactForm";

const Index = () => {
    return (
        <div className={`mx-auto w-screen max-w-7xl`}>
           <ContactForm />
        </div>
    );
};

export default Index;

Index.getLayout = function getLayout(page){
    return(
        <Client>
            {page}
        </Client>
    )
}
