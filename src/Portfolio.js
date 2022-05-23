import {ReactComponent as Fire} from './components/UI/Icons/fire.svg'
import {ReactComponent as Books} from './components/UI/Icons/books.svg'
import {ReactComponent as Home} from './components/UI/Icons/home.svg'
import todo from './components/UI/PortfolioSlider/screens/todo.png'
import quiz from './components/UI/PortfolioSlider/screens/quiz.png'
import excel from './components/UI/PortfolioSlider/screens/excel.png'
import calculate from './components/UI/PortfolioSlider/screens/calculate.png'
import snake from './components/UI/PortfolioSlider/screens/snake.png'
import travel from './components/UI/PortfolioSlider/screens/travel.png'
import formular from './components/UI/PortfolioSlider/screens/formular.png'


export const AboutMe = {
  name: 'Коротеев Кирилл',
  carrier: 'Junior Frontend Developer',
  brief: 'ReactJS, Redux, HTML, CSS (Sass), CSS Framework (Bootstrap, Materialize).',
}

export const AboutCard = [
  // {icon: <Fire />, title: 'Созданных репозиториев', total: 6},
  {icon: <Books />, title: 'Выполненных pet-проектов', total: 8},
  {icon: <Home />, title: 'Лет изучения', total: 2},
]

export const EducationCard = [
  {position: 'Ступинский техникум им.Туманова', location: 'Ступино', organization: 'Информационные системы', years: '2014 - 2018'},
  {position: 'Ступинский филиал МАИ', location: 'Ступино', organization: 'Информатика и выч. техника', years: '2018 - 2023'},
]

export const WorkCard = [
  {position: 'Factory IT', location: 'Ступино', organization: 'Fujitsu Solutions', years: '2021 - н.в'},
  {position: 'Системный администратор', location: 'Ступино', organization: 'Бюджетное учреждение', years: '2018 - 2021'},
]

export const CourseCard = [
  {position: 'React JS. Практический курс.', organization: 'Udemy', years: '2022'},
  {position: 'Продвинутый JavaScript. Создаем Excel без фреймворков.', organization: 'Минин В.', years: '2022'}
]

export const yourPortfolio = [
  {
    projectName: 'Todo list',
    projectDesc: 'Приложение написано на ReactJS и Redux. Имеет адаптив, светлую и темную тему, а также хранит пользовательские данные в localstorage.',
    projectScreen: todo,
    link: 'https://korotkir.github.io/ToDo/'
  },
  {
    projectName: 'Quiz',
    projectDesc: 'Приложение для выполнения тестов. Имеет backend на firebase.',
    projectScreen: quiz,
    link: 'https://react-quiz-f412a.web.app/'
  },
  {
    projectName: 'Excel',
    projectDesc: 'Web - версия Excel. Написан на нативном JS. Выполнен в рамках курса "Продвинутый JavaScript. Создаем Excel без фреймворков."',
    projectScreen: excel,
    link: 'https://korotkir.github.io/excel/dist/'
  },
  {
    projectName: 'Калькулятор',
    projectDesc: 'Простой калькулятора на нативном JS.',
    projectScreen: calculate,
    link: 'https://korotkir.github.io/calculate_full/'
  },
  {
    projectName: 'Змейка',
    projectDesc: 'Игра змейка на нативном JS',
    projectScreen: snake,
    link: 'https://korotkir.github.io/snake/'
  },
  {
    projectName: 'Путешествие по России',
    projectDesc: 'Верстка адаптивного сайта',
    projectScreen: travel,
    link: 'https://korotkir.github.io/travel_across_russia/'
  },
  {
    projectName: 'Формуляр',
    projectDesc: 'Простое приложение для расчета часов по формулярам оборудования',
    projectScreen: formular,
    link: 'https://korotkir.github.io/formular/'
  },
]
