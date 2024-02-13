class IFrame {
     private  iframe:string = '#frame1'
    private body:string ='body'

    getIframe(){
         cy.get(this.iframe).then(iFrame=>{
              const body = iFrame.contents().find(this.body)
             cy.wrap(body)
         })
    }
}
export const IFrame = new IFrame()