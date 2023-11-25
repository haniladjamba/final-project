/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure to import jQuery if it's not already included
import 'bootstrap'; // Make sure to import Bootstrap if it's not already included

const TodayFunction = () => {

  useEffect(() => {
    const formatDate = (date) => {
      return (
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear()
      );
    };

    const currentDate = formatDate(new Date());

    bootlint.showLintReportForCurrentDocument([], {
      hasProblems: false,
      problemFree: false,
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".due-date-button").datepicker({
      format: 'dd/mm/yyyy',
      autoclose: true,
      todayHighlight: true,
      startDate: currentDate,
      orientation: 'bottom right',
    });

    $(".due-date-button").on('click', function (event) {
      $(".due-date-button")
        .datepicker('show')
        .on('changeDate', function (dateChangeEvent) {
          $(".due-date-button").datepicker('hide');
          $(".due-date-label").text(formatDate(dateChangeEvent.date));
        });
    });
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div>
      {/* Your JSX content here */}
    </div>
  );
};

export default TodayFunction;
