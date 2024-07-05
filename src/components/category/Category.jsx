import React from 'react';
import { Stack } from '@mui/material'
import { category } from '../../constants'
import { colors } from '../../constants/colors';
const Category = ({ selectedCategoryHandler, selectedCategory }) => {
    return (
        <Stack sx={{ height: 'auto', overflowX: 'scroll' }} direction='row'>
            {category.map((item) => {
                return (
                    <button
                        onClick={() => selectedCategoryHandler(item.name)}
                        className='category_btn' key={item.name}
                        style={{
                            borderRadius: '0',
                            background: item.name === selectedCategory && colors.secondary,
                            color: item.name === selectedCategory && 'white'
                        }}>
                        <span style={{ color: colors.secondary, marginRight: '15px', color: item.name === selectedCategory && 'white' }}>{item.icon}</span>
                        <span style={{ opacity: '1' }}>{item.name}</span>
                    </button>
                )
            })}
        </Stack>
    );
}

export default Category;
