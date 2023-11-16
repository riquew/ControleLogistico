import React from "react";

const FormInserir = ({ labels }) => {
  if (labels === "Policial") {
    return (
      <form className="">
        <label htmlFor="posto">Posto/Graduação</label>
        <select htmlFor="posto">
          <option value="sd">Sd PM</option>
          <option value="cb">Cb PM</option>
          <option value="3sgt">3° Sgt PM</option>
          <option value="2sgt">2° Sgt PM</option>
          <option value="1sgt">1° Sgt PM</option>
          <option value="subTen">SubTen PM</option>
          <option value="asp">Asp Of PM</option>
          <option value="2ten">2° Ten PM</option>
          <option value="1ten">1° Ten</option>
          <option value="cap">Cap PM</option>
          <option value="maj">Maj PM</option>
          <option value="tcel">Ten Cel PM</option>
        </select>
        <label htmlFor="qra">QRA</label>
        <input type="text" name="qra" id="" placeholder="Pacheco" />
        <label htmlFor="re">RE</label>
        <input type="text" name="qra" id="" placeholder="140948" />
        <label htmlFor="unidade">Unidade</label>
        <select htmlFor="posto">
          <option value="em">Estado Maior</option>
          <option value="1cia">1ª Cia</option>
          <option value="2cia">2ª Cia</option>
          <option value="3cia">3° Cia</option>
          <option value="ft">Força Tática</option>
        </select>
      </form>
    );
  } else {
    return <div>{labels}</div>;
  }
};

export default FormInserir;
