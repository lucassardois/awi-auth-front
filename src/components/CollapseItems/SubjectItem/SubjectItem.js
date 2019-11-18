import React from 'react'
import styles from './SubjectItem.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SubjectItem (props) {
  return (
    <>
      <div className={styles.subjectName}>{props.name}</div>
      <div className={styles.subjectContainer}>
        <div className={styles.subjectECTS}>
          <div>{props.ects}</div>
          <div className={styles.subjectUnderDescription}>ECTS</div>
        </div>
        <div className={styles.subjectAverage}>

          <div className={(props.average
            ? props.average < 6
              ? styles.averageDanger
              : props.average < 10
                ? styles.averageRisk
                : styles.averageValid
            : styles.averageMissing)}
          >
            {props.average ? props.average : '-'}
          </div>

          <div className={styles.subjectUnderDescription}>Moyenne</div>
        </div>
        {
          props.tests !== undefined
            ? props.tests.map((test) =>
              <div className={styles.testContainer}>
                <span className={styles.testName}>{test.exam} </span>
                <div>
                  <div className={styles.testNumberInfo}>{test.mark}</div>
                  <div className={styles.subjectUnderDescription}>/20</div>
                </div>
                <div>
                  <div className={styles.testNumberInfo}>{test.coeff}</div>
                  <div className={styles.subjectUnderDescription}>Coeff</div>
                </div>
              </div>
            )
            : <div className={styles.noTest}>Pas encore évalué</div>
        }
        <div className={styles.addMarkBtn}>
          <FontAwesomeIcon
            icon={faPlus}
          />
        </div>
      </div>
    </>
  )
}

export default SubjectItem
