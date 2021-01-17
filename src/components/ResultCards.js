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

let tempKey = 0;

const ResultCards = ({ allSubjectCodes }) => {
  const classes = useStyles();

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
          <Typography variant='tr' component='thead'>
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
              return (
                <tr key={tempKey++} className={classes.trStyle}>
                  <td className={classes.subjects}>{subject.sub}</td>
                  <td className={classes.grades}>{subject.grade}</td>
                </tr>
              );
            })}
          </Typography>
        </table>
        <p className={classes.gpa}>GPA: 9.99 </p>
      </CardContent>
    </Card>
  );
};

export default ResultCards;
