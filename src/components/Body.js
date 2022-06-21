import img from '../1.png'
import img1 from "../2.png";
import img2 from "../3.png";
function Body() {
    return (
        <div>
        <hr/>
            
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img src={img} style={{ width: "30px" }} />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Html</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <img src={img1} style={{ width: "30px" }} />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>PHP</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <img src={img2} style={{ width: "30px" }} />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>CSS</td>
          </tr>
        </tbody>
            </table>
            </div>
    );
}
export default Body;