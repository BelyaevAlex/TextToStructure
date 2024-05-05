import Capacitor

@objc(TextToStructurePlugin)
public class TextToStructurePlugin: CAPPlugin {
  @objc func texttostructure(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.resolve([
        "value": value
    ])
  }
}
