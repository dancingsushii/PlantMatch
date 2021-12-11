import React, { Component }  from 'react';
import logo from '../../plantmatch_logo.png';
import './App.css';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TagsInput from "./TagsInput";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class App extends Component {

    handleFileUpload = event => {
        console.log(event.target.files[0].name);
    };

    render () {
        return (
            <div className="App">
                <div className = 'wrapper'>
                    <div className = 'nav'>
                        <img src={logo} className="app-logo-small" alt="plantmatch_logo" />
                    </div>

                    <div className = 'main'>
                        <div className = 'splitter'>
                            <div className = 'upload'>
                                <React.Fragment>
                                    <input
                                        ref="fileInput"
                                        onChange={this.handleFileUpload}
                                        type="file"
                                        style={{ display: "none" }}
                                    />
                                    <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
                                </React.Fragment>
                            </div>

                            <div className = 'data'>
                                <div className = 'table'>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell>Plant ID</TableCell>
                                                <TableCell align="right">Plant</TableCell>
                                                <TableCell align="right">Number of grains</TableCell>
                                                <TableCell align="right">Deseased grains</TableCell>
                                                <TableCell align="right">Colour</TableCell>
                                                <TableCell align="right">Number of rows</TableCell>
                                                <TableCell align="right">Labeled characteristics</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="right">{row.plant}</TableCell>
                                                <TableCell align="right">{row.number_of_grains}</TableCell>
                                                <TableCell align="right">{row.deseased_grains}</TableCell>
                                                <TableCell align="right">{row.colour}</TableCell>
                                                <TableCell align="right">{row.number_of_rows}</TableCell>
                                                <TableCell align="right">{row.labels}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                                
                                <div className = 'labelForm'>
                                    <TagsInput
                                        selectedTags={handleSelecetedTags}
                                        fullWidth
                                        variant="outlined"
                                        id="tags"
                                        name="tags"
                                        placeholder="add new labels"
                                        label="Labels"
                                        background-color="green"
                                    />
                                </div>
                            </div>
                            <div className = 'match'>
                                <ImageList
                                    sx={{
                                        width: 500,
                                        height: 800,
                                        transform: 'translateZ(0)',
                                    }}
                                    rowHeight={200}
                                    gap={1}
                                >
                                    {itemData.map((item) => {
                                        const cols = item.featured ? 2 : 1;
                                        const rows = item.featured ? 2 : 1;

                                        return (
                                            <ImageListItem key={item.img} cols={cols} rows={rows}>
                                                <img
                                                {...srcset(item.img, 250, 200, rows, cols)}
                                                alt={item.title}
                                                loading="lazy"
                                                />
                                                <ImageListItemBar
                                                sx={{
                                                    background:
                                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                                }}
                                                title={item.title}
                                                position="top"
                                                actionPosition="left"
                                                />
                                            </ImageListItem>
                                        );
                                    })}
                                </ImageList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function createData(id, plant, number_of_grains, deseased_grains, colour, number_of_rows, labels) {
    return { id, plant, number_of_grains, deseased_grains, colour, number_of_rows, labels};
}

function handleSelecetedTags(items) {
    console.log(items);
}

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const rows = [
    createData(1,'Corn', 159, 23, 'yellow', 15, ''),
    createData(2, 'Corn', 237, 9, 'yellow', 23, ''),
];

const itemData = [
    {
      img: require('./images/corn_001.jpg'),
      title: 'Corn',
      id: 1,
      featured: true,
    },
    {
      img: require('./images/corn_002.jpg'),
      title: 'Corn',
      id: 2,
    },
    {
      img: require('./images/corn_003.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_004.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_005.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_006.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_007.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_008.jpg'),
      title: 'Corn',
      featured: true,
    },
    {
      img: require('./images/corn_009.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_010.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_011.jpg'),
      title: 'Corn',
    },
    {
      img: require('./images/corn_012.jpg'),
      title: 'Corn',
    },
  ];

export default App;
