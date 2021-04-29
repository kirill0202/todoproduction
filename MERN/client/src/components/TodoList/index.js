import React from 'react';
import { CaContainer } from '../Container/index';
import { Icon, WrapperList, ListItem, List, Title, Description, WrapperIcon, Date } from './styles';
import { done, remove, star } from '../../static';



export function TodoList({ todo, handlerRemoveTodo, handlerUpdateCompletedTodo, handlerUpdateImportendTodo }) {
    return (
        <CaContainer>
            <List>
                {todo.map((item) => {
                    return (
                        <ListItem key={item._id}>
                            <WrapperList>
                                <div>
                                    <Title done={item.completed} importanted={item.importanted}>
                                        {item.title}
                                    </Title>
                                    <Description done={item.completed} importanted={item.importanted}>
                                        {item.description}
                                    </Description>
                                    <Date done={item.completed} importanted={item.importanted}>
                                        {item.date}
                                    </Date>
                                </div>
                                <WrapperIcon>
                                    <Icon src={done} onClick={() => handlerUpdateCompletedTodo(item._id)}/>
                                    <Icon src={star} onClick={() => handlerUpdateImportendTodo(item._id)}/>
                                    <Icon src={remove} onClick={() => handlerRemoveTodo(item._id)}/>
                                </WrapperIcon>
                            </WrapperList>
                        </ListItem>
                    )
                })}
            </List>
        </CaContainer>
    );
}