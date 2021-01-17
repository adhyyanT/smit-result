import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ResultCards.css';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  root: {
    minWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 10% 0px 10%',
    height: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    left: '20%',
    right: '80%',
    position: 'absolute',
    paddingBottom: 10,
  },
  gradetitle: {
    fontSize: 17,
    marginBottom: 10,
    marginLeft: 0,
    paddingRight: 10,
    paddingBottom: 10,
  },
  pos: {
    marginBottom: 12,
  },
  grades: {
    padding: '10px 10px 10px 25px',
  },
  subjects: {
    paddingRight: '15px',
  },
  gpa: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const ResultCards = ({ allSubjectCodes, gradesProp, creditsProp, gpaProp }) => {
  const classes = useStyles();
  let tempKey = 0;

  const calculateGpa = () => {
    let points = 0;
    let gpa = 0;
    let maxgpa = 0;
    for (let j = 0; j < creditsProp.length; j++) {
      maxgpa = maxgpa + creditsProp[j] * 10;
    }

    for (let i = 0; i < gradesProp.length; i++) {
      switch (gradesProp[i]) {
        case 'S':
          points = 10;
          break;
        case 'A':
          points = 9;
          break;
        case 'B':
          points = 8;
          break;
        case 'C':
          points = 7;
          break;
        case 'D':
          points = 6;
          break;
        case 'E':
          points = 5;
          break;
        case 'F':
          points = 0;
          break;
        case 'I':
          points = 0;
          break;
        case 'MP':
          points = 0;
          break;
        default:
          break;
      }
      gpa = gpa + points * creditsProp[i];
    }
    if (maxgpa !== 0) {
      gpaProp = (gpa * 10) / maxgpa;
    }
  };

  return (
    <Card
      className='cssRoot'
      style={{
        background: 'transparent',
        backgroundColor: fade('#b03f23', 0.4),
        color: '#d4c9c7',
      }}
    >
      <CardContent>
        <table>
          <Typography variant='h5' component='thead'>
            <tr>
              <th className='cssSubTitle' style={{ color: '#ffffff' }}>
                Subjects
              </th>
              <th className={classes.gradetitle} style={{ color: '#ffffff' }}>
                Grades
              </th>
            </tr>
          </Typography>
          <Typography variant='body2' component='tbody'>
            {allSubjectCodes.map((subject) => {
              gradesProp.push(subject.grade);
              creditsProp.push(subject.credit);
              calculateGpa();
              return (
                <tr key={tempKey++} className={classes.trStyle}>
                  <td className={classes.subjects}>{subject.sub}</td>
                  <td className={classes.grades}>{subject.grade}</td>
                </tr>
              );
            })}
          </Typography>
        </table>
        <p className={classes.gpa}>GPA: {gpaProp} </p>
      </CardContent>
    </Card>
  );
};

export default ResultCards;
