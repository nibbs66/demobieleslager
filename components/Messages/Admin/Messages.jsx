import React from 'react';
import Table from "../../Tables/Table";
import Pagination from "../../Tables/Pagination/Pagination";
import MessageTable from "../../Tables/MessageTable";

const Messages = ({messages, page, count }) => {

    const columns = ['Email', 'Voornaam', 'Achternaam', 'Phone', 'Message']
    return (
        <div className={`py-10 px-5 xl:px-0`}>
            <div className={`mx-auto max-w-7xl  rounded-lg p-5 bg-white shadow-2xl`}>


                    <MessageTable data={messages} page={page} columns={columns} title={'Berichten'} empty={`Berichtenmap is leeg`} />
                    <Pagination
                        count={count}
                        items={messages?.length}
                        page={page}
                        view={'admin/berichten'}
                        events={10}


                    />


            </div>
        </div>
    );
};

export default Messages;
