import { StyleSheet, Text, View,Button, Alert } from 'react-native'
import React from 'react'
import { PDFDocument } from 'pdf-lib'
import RNFS from 'react-native-fs'
import comply from '../Assets/comply.png'
const PdfCreater = () => {

    const GeneratePdf=async()=>{
        try
        {
            const pdfDoc=await PDFDocument.create();
            const page= pdfDoc.addPage();
            page.drawText('Hello World in Pdf',
                {
                    x:50,
                    y:200,
                    size:18
                }
            );
            page.drawRectangle({
                x:25,
                y:25,
                width:250,
                height:100,
                Color:'red'
            })
            page.drawImage(comply,'png',{
                x:25,
                y:400,
                with:150,
                height:60
            })
            const pdfByte=await pdfDoc.saveAsBase64({dataUri:false});
            const pdfPath=`${RNFS.ExternalDirectoryPath}/firstPdf.pdf`;
            await RNFS.writeFile(pdfPath,pdfByte,'base64');
            Alert.alert(
                'Pdf Generated Successfully'
            )
        }
        catch(error)
        {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }
  return (
    <View style={styles.container}>
      <Button title={"Generate Password"} onPress={GeneratePdf} />
    </View>
  )
}

export default PdfCreater

const styles = StyleSheet.create({
    container:{
        height:800,
        justifyContent:'center',
        alignItems:'center'
    }
})