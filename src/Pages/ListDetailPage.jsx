import React from 'react';
import { ListDetail } from '../Components/ListDetail/ListDetail';
import { LatestEntries } from '../Components/LatestEntries/LatestEntries'
import { useParams } from 'react-router-dom'
import { listData } from '../Mock/ListDetail';

export const ListDetailPage = () => {
    const { id } = useParams();
    const listDetail = listData.find((item) => item.slug === id)

    return (
        <div>
            <ListDetail data={listDetail} />
            <LatestEntries />
        </div>
    );
};

