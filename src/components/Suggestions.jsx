import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import './Suggestions.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// Контейнер для карточки проблемы
const ProblemCardContainer = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #f0f0f0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
  max-width: 800px; // Устанавливаем максимальную ширину для адаптивности
`;

// Заголовок проблемы
const ProblemTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

// Описание проблемы
const ProblemDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #7c7c7c;
`;

// Контейнер для категории и тегов
const CategoryAndTags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

// Категория
const Category = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #000000;
  margin-right: 10px;
`;

// Контейнер для тегов
const TagsContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Тег
const Tag = styled.div`
  background-color: #58ae6b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 2px 10px;
  margin: 3px 5px;
`;

// Текст тега
const TagText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
`;

// Контейнер для уровня сложности и кнопки
const SimilarityAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

// Уровень сходства (сложности)
const Similarity = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #000000;
`;

// Кнопка "Show solution"
const Button = styled.button`
  background-color: #2e683b;
  border-radius: 35px;
  padding: 6px 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width:200px;
  height:60px;
  margin:auto 0px;
`;

// Тег сложности
const DifficultyTag = styled.div`
  background-color: ${props =>
    props.difficulty === 'easy'
      ? '#58ae6b'
      : props.difficulty === 'medium'
        ? '#ebca56'
        : '#cd5656'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  padding: 2px 10px;
  height:20px;
  margin: auto 10px;
`;

// Текст сложности
const DifficultyText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-transform: capitalize; // Делаем первую букву заглавной
`;

// Компонент карточки проблемы
const ProblemCard = ({ difficulty, title, description, category, tags, similarity,taskid }) => {
  const navigate = useNavigate(); // Перемещение внутри компонента
  return (
    <ProblemCardContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProblemTitle>{title}</ProblemTitle>
        <DifficultyTag difficulty={difficulty}>
          <DifficultyText>{difficulty}</DifficultyText>
        </DifficultyTag>
      </div>

      <ProblemDescription>{description}</ProblemDescription>
      <CategoryAndTags>
        <Category>{category}</Category>

      </CategoryAndTags>
      <TagsContainer>
        Tags:
        {tags.map((tag, index) => (
          <Tag key={index}>
            <TagText>{tag}</TagText>
          </Tag>
        ))}
      </TagsContainer>
      <SimilarityAndButton>
        <Similarity>{`${similarity}% similarity`}</Similarity>
        <Button  onClick={() =>navigate('/Base/'+taskid)}>Show solution &rarr;</Button>
      </SimilarityAndButton>
    </ProblemCardContainer>
  );
};

// Компонент приложения
const Suggestions = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const tags = data.state?.responseData || '';
  console.log(tags);
  var responseData;


  return (
    <div style={{ margin: '300px 200px' }} className='Suggestions'>
      <div class="slider">
        <div class="line"></div>
        <div class="ellipse">

        </div>
        <div class="ellipse">

        </div>
        <div class="ellipse">
          <div class="inner-circle"></div>
        </div>
        <div class="ellipse"></div>
      </div>
      <div style={{ display: 'flex', marginBottom: 56 }}>
        {tags.map((problem, index) => {
          let description = problem.description.substring(0, 250);
          if (problem.description.length > 250) {
            description += ' . . .';
          }
          return (
            <ProblemCard
              key={index}
              difficulty='Hard'
              title={problem.title}
              description={description}
              category="Category: Graph algorithms"
              tags={['graph', 'tree', 'set']}
              similarity={problem.similarityScore}
              taskid={problem.problemId}
            />
          );
        })}

        {/* <ProblemCard
          difficulty="easy"
          title="Sort an Array"
          description="Given a binary tree. Need to return a list of tree levels, where each odd level is represented by a list of values of nodes traversed from left to right, and each even level is represented by a list of values of nodes traversed from right to left."
          category="Category: Graph algorithms"
          tags={['graph', 'tree', 'set']}
          similarity={93}
        />
        <ProblemCard
          difficulty="medium"
          title="Sort an Array"
          description="Given a binary tree. Need to return a list of tree levels, where each odd level is represented by a list of values of nodes traversed from left to right, and each even level is represented by a list of values of nodes traversed from right to left."
          category="Category: Graph algorithms"
          tags={['graph', 'tree', 'set']}
          similarity={88}
        />
        <ProblemCard
          difficulty="difficult"
          title="Sort an Array"
          description="Given a binary tree. Need to return a list of tree levels, where each odd level is represented by a list of values of nodes traversed from left to right, and each even level is represented by a list of values of nodes traversed from right to left."
          category="Category: Graph algorithms"
          tags={['graph', 'tree', 'set']}
          similarity={78}
        /> */}
      </div>
      {/* Кнопки навигации */}
      <div className="buttons">
        <button type="button" className='Back' onClick={() => navigate('/Tags')}>{'<'}- Back</button>
        <button type="button" className='Go' onClick={() => navigate('/Overall')}>Go -{'>'}</button>
      </div>

    </div>
  );
};

export default Suggestions;

