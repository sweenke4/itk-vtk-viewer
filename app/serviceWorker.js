if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let m={};const o=e=>a(e,r),c={module:{uri:r},exports:m,require:o};i[r]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(d(...e),m)))}}define(["./workbox-9d06fa15"],(function(e){"use strict";e.setCacheNameDetails({prefix:"itk-vtk-viewer-"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"124.itkVtkViewer.js",revision:"99038064588643947ff3e4f4a91e1c02"},{url:"itk/image-io/BMPImageIOReadImage.js",revision:"59b481b641efa2925c8bf1cd219ba79d"},{url:"itk/image-io/BMPImageIOReadImage.umd.js",revision:"d1bbabd5e5d23cb2a2306c2ec7796d0b"},{url:"itk/image-io/BMPImageIOWriteImage.js",revision:"de69a9e81575ba0a9400165e2f9f83a5"},{url:"itk/image-io/BMPImageIOWriteImage.umd.js",revision:"17e5aede900beef6c7ce0f7b1ceda051"},{url:"itk/image-io/BioRadImageIOReadImage.js",revision:"7a538ac18259d148023fc8cc4790cddb"},{url:"itk/image-io/BioRadImageIOReadImage.umd.js",revision:"4d1c3026aad9e8516aff02a913cee69c"},{url:"itk/image-io/BioRadImageIOWriteImage.js",revision:"458f63dfcc55033cbeceb017c9528659"},{url:"itk/image-io/BioRadImageIOWriteImage.umd.js",revision:"0e09e83a9b3068513037ab16c08820b4"},{url:"itk/image-io/CompressStringify.js",revision:"ee5083330e8cc52fec7c038dca5c82b2"},{url:"itk/image-io/CompressStringify.umd.js",revision:"29a134850ce7029c03bfbd7b8056d749"},{url:"itk/image-io/FDFImageIOReadImage.js",revision:"b01963816829cacbc90a75bcd73ce20a"},{url:"itk/image-io/FDFImageIOReadImage.umd.js",revision:"4eb9aee4d6a101b97b29144471c6d3e2"},{url:"itk/image-io/FDFImageIOWriteImage.js",revision:"7b90dcc5497494a68128377745ccd9f2"},{url:"itk/image-io/FDFImageIOWriteImage.umd.js",revision:"653eb33721f59fd4ffa141bcab072c27"},{url:"itk/image-io/GDCMImageIOReadImage.js",revision:"731fc56c0f096f1ce5b4c18023a6d098"},{url:"itk/image-io/GDCMImageIOReadImage.umd.js",revision:"f55f57bf2682a5dab96612d95ed66ba4"},{url:"itk/image-io/GDCMImageIOWriteImage.js",revision:"cac77c0befc3af5a93a816d2c960ffca"},{url:"itk/image-io/GDCMImageIOWriteImage.umd.js",revision:"26b946a1092938cdcdf30033ead1bc05"},{url:"itk/image-io/GE4ImageIOReadImage.js",revision:"9f9455a275c0d905388a00e53d18902a"},{url:"itk/image-io/GE4ImageIOReadImage.umd.js",revision:"51507d4c8b68c7b7ef0eec5d97b44977"},{url:"itk/image-io/GE4ImageIOWriteImage.js",revision:"dd9ac8f753034dcfd77b25017975537e"},{url:"itk/image-io/GE4ImageIOWriteImage.umd.js",revision:"448e31782f581468df12886249a3a144"},{url:"itk/image-io/GE5ImageIOReadImage.js",revision:"957dd2ed209464a4600e900a6ded7ff4"},{url:"itk/image-io/GE5ImageIOReadImage.umd.js",revision:"fff2794bcd4b033d1a1f113badb5d3bc"},{url:"itk/image-io/GE5ImageIOWriteImage.js",revision:"d4e64346ef6d8ed20c40f9e4083ee99b"},{url:"itk/image-io/GE5ImageIOWriteImage.umd.js",revision:"ec69e3a94c4cc01b4b2320e06495295e"},{url:"itk/image-io/GEAdwImageIOReadImage.js",revision:"c7f88939e6ba7f0c970d4c1e19ff0778"},{url:"itk/image-io/GEAdwImageIOReadImage.umd.js",revision:"64b16fd5295d614fb1b205ceaef82e4e"},{url:"itk/image-io/GEAdwImageIOWriteImage.js",revision:"cbdb2e98e4d1772146fb8b6778234e27"},{url:"itk/image-io/GEAdwImageIOWriteImage.umd.js",revision:"2d9e378052de561486ed25273351aa5e"},{url:"itk/image-io/GiplImageIOReadImage.js",revision:"5e823f88657b7929e784d0c5bb576acc"},{url:"itk/image-io/GiplImageIOReadImage.umd.js",revision:"fc0eb4aa200a53e951cc35fb71582806"},{url:"itk/image-io/GiplImageIOWriteImage.js",revision:"f89ccc341dceee4b167a855ba767a1c8"},{url:"itk/image-io/GiplImageIOWriteImage.umd.js",revision:"d041d3d28ee0cff3eecd529437cf6570"},{url:"itk/image-io/HDF5ImageIOReadImage.js",revision:"de62d9665332989209fea1b6a1a701cb"},{url:"itk/image-io/HDF5ImageIOReadImage.umd.js",revision:"7cb140207a64f08b33ce14acb47f8541"},{url:"itk/image-io/HDF5ImageIOWriteImage.js",revision:"6d1a2e856cb15470540ff2711190a0f5"},{url:"itk/image-io/HDF5ImageIOWriteImage.umd.js",revision:"e26abaeb1c090a6039dbf1f5bc8be5d2"},{url:"itk/image-io/JPEGImageIOReadImage.js",revision:"0ed4d7bc83e6ea558735cc81a3987aac"},{url:"itk/image-io/JPEGImageIOReadImage.umd.js",revision:"0fe5d5ecc4c101e2c0c3ecd0db77805a"},{url:"itk/image-io/JPEGImageIOWriteImage.js",revision:"5e112bf3b36b1c33e1bee918cda4e686"},{url:"itk/image-io/JPEGImageIOWriteImage.umd.js",revision:"2aa1fd7b8eced5af9e15b9d834e36811"},{url:"itk/image-io/LSMImageIOReadImage.js",revision:"6eb0d0cbcaa0e5db68a13cf60462182a"},{url:"itk/image-io/LSMImageIOReadImage.umd.js",revision:"fabfc2aac53871a748adde949655a62a"},{url:"itk/image-io/LSMImageIOWriteImage.js",revision:"92895aa8d269db16205e3ce2d12e458e"},{url:"itk/image-io/LSMImageIOWriteImage.umd.js",revision:"7fa783af137ad03bc95e3ccffbbab277"},{url:"itk/image-io/MGHImageIOReadImage.js",revision:"bd596968966db4d4515d61ee5c956f33"},{url:"itk/image-io/MGHImageIOReadImage.umd.js",revision:"ded2f6ecbeec1ca131eead1b84017b75"},{url:"itk/image-io/MGHImageIOWriteImage.js",revision:"818c881abebb62a263c35127710056ff"},{url:"itk/image-io/MGHImageIOWriteImage.umd.js",revision:"58bf82e89459a0c4f71f99b90145a2a0"},{url:"itk/image-io/MINCImageIOReadImage.js",revision:"4e289f2f90b2b44d12206a568d16938f"},{url:"itk/image-io/MINCImageIOReadImage.umd.js",revision:"4b949f9a506519a71e3f42c0dec35f25"},{url:"itk/image-io/MINCImageIOWriteImage.js",revision:"28d794f51afad6538887ce2bfdee25e8"},{url:"itk/image-io/MINCImageIOWriteImage.umd.js",revision:"cd92aca16e2b82c91904152dae959b93"},{url:"itk/image-io/MRCImageIOReadImage.js",revision:"0919522551f66021ea9b0721c8318c76"},{url:"itk/image-io/MRCImageIOReadImage.umd.js",revision:"2192d26b73ba4c0fbb1c97b19180c7ac"},{url:"itk/image-io/MRCImageIOWriteImage.js",revision:"321c3a050c596b380319b52733d5e670"},{url:"itk/image-io/MRCImageIOWriteImage.umd.js",revision:"7fc945a72dc13e6e2926d2e1e7636931"},{url:"itk/image-io/MetaImageIOReadImage.js",revision:"4c1586c74107f6a87d0d62fb1090add3"},{url:"itk/image-io/MetaImageIOReadImage.umd.js",revision:"7cab14131d63805f4ec35448b11142b9"},{url:"itk/image-io/MetaImageIOWriteImage.js",revision:"d898f730dc6fecc068fe96c22e53ddaf"},{url:"itk/image-io/MetaImageIOWriteImage.umd.js",revision:"ac6de9621974265a8ee6cbea4b44cca6"},{url:"itk/image-io/NiftiImageIOReadImage.js",revision:"9f1f30cfbe7f138207ee636ccbf6d914"},{url:"itk/image-io/NiftiImageIOReadImage.umd.js",revision:"218a1178d412c59eecb362f27b544183"},{url:"itk/image-io/NiftiImageIOWriteImage.js",revision:"a7d8263a4ecd65513c11f5146704c229"},{url:"itk/image-io/NiftiImageIOWriteImage.umd.js",revision:"cd5f76aa44fcdf4142e24127443e8363"},{url:"itk/image-io/NrrdImageIOReadImage.js",revision:"6652f9ec31a6d93e2695f591e830436a"},{url:"itk/image-io/NrrdImageIOReadImage.umd.js",revision:"978d440073282c578082f96dee8d05bc"},{url:"itk/image-io/NrrdImageIOWriteImage.js",revision:"647af3a84ea96256030c37a6801c6288"},{url:"itk/image-io/NrrdImageIOWriteImage.umd.js",revision:"ca15c42d1e37d45d4e15fbc181896859"},{url:"itk/image-io/PNGImageIOReadImage.js",revision:"60e884d040aa4426d5cc7cdd536cc263"},{url:"itk/image-io/PNGImageIOReadImage.umd.js",revision:"2a9108cc849a7b73317bec28e67fe249"},{url:"itk/image-io/PNGImageIOWriteImage.js",revision:"2c5d5526a8d983686bc8695dd6b6f4b5"},{url:"itk/image-io/PNGImageIOWriteImage.umd.js",revision:"8eec7ab46fc242b7372c0fa3988549f1"},{url:"itk/image-io/ParseStringDecompress.js",revision:"931a23af327ada02c8ab592207d81e63"},{url:"itk/image-io/ParseStringDecompress.umd.js",revision:"91b7581996100b6036a11d2f1f640cf0"},{url:"itk/image-io/ReadDICOMTags.js",revision:"aff30fb6de9cfe806f8813f2f95667c9"},{url:"itk/image-io/ReadDICOMTags.umd.js",revision:"e8d805759ba833e47023415d47a17954"},{url:"itk/image-io/ReadImageDICOMFileSeries.js",revision:"a0785e617228cd91d1575640e497999c"},{url:"itk/image-io/ReadImageDICOMFileSeries.umd.js",revision:"dbf6305ba7c3f33b599dcbfe06e72d40"},{url:"itk/image-io/ScancoImageIOReadImage.js",revision:"7ab4f7cd93b857f9b661134b57c3adfb"},{url:"itk/image-io/ScancoImageIOReadImage.umd.js",revision:"5f191ccc8a66725009719ba21601f108"},{url:"itk/image-io/ScancoImageIOWriteImage.js",revision:"13d49138b23a8059801f77360f8876e3"},{url:"itk/image-io/ScancoImageIOWriteImage.umd.js",revision:"3d4458aa2a0f264b6ad96d3cfc30b8f9"},{url:"itk/image-io/TIFFImageIOReadImage.js",revision:"d475626e272047bc7c8cb8fe0cb2f2b0"},{url:"itk/image-io/TIFFImageIOReadImage.umd.js",revision:"7391ab999adbeea823e6b2c1d38368af"},{url:"itk/image-io/TIFFImageIOWriteImage.js",revision:"fcb90861e93fd83153c1f5f5c1b939ad"},{url:"itk/image-io/TIFFImageIOWriteImage.umd.js",revision:"4aa8b56fa0297b3c096b1542262a1b27"},{url:"itk/image-io/VTKImageIOReadImage.js",revision:"8820229ad2be5732c3df7dca8ea3e2ec"},{url:"itk/image-io/VTKImageIOReadImage.umd.js",revision:"9694e679b1a445de0e079bb36a9d8f0c"},{url:"itk/image-io/VTKImageIOWriteImage.js",revision:"d74e1bdcfedcd0b1b78b7e8e219acc1a"},{url:"itk/image-io/VTKImageIOWriteImage.umd.js",revision:"759870fc4d0a0a5d09fc78e0377ca55d"},{url:"itk/image-io/WASMImageIOReadImage.js",revision:"777ad2d089b772ee65ba3f928539a109"},{url:"itk/image-io/WASMImageIOReadImage.umd.js",revision:"c6848215ccee4b00f02ae7755fa6bc2b"},{url:"itk/image-io/WASMImageIOWriteImage.js",revision:"eb3fc17698e08de0555d2f6935f0b033"},{url:"itk/image-io/WASMImageIOWriteImage.umd.js",revision:"d2b4423ea5721d281340e8c38dc6efff"},{url:"itk/image-io/WASMZstdImageIOReadImage.js",revision:"5eecd1899038b6687a82ede11f925a78"},{url:"itk/image-io/WASMZstdImageIOReadImage.umd.js",revision:"af5e7ab7026d8644513d1bc10721920b"},{url:"itk/image-io/WASMZstdImageIOWriteImage.js",revision:"c626fb804d033273bdacf3b9490b2c12"},{url:"itk/image-io/WASMZstdImageIOWriteImage.umd.js",revision:"8a120652c8b0194207d50986b690a10f"},{url:"itk/image-io/index.js",revision:"8691558457bebac75c4da487e9a8d234"},{url:"itk/mesh-io/BYUMeshIOReadMesh.js",revision:"3761030bb38aca29472234a461c6df81"},{url:"itk/mesh-io/BYUMeshIOReadMesh.umd.js",revision:"5881e17ff21248b3ba115f5fbc8e80a1"},{url:"itk/mesh-io/BYUMeshIOWriteMesh.js",revision:"cb78e381fb00c495876aff09f5464236"},{url:"itk/mesh-io/BYUMeshIOWriteMesh.umd.js",revision:"ace7c63a6bcec877787f4ad26b8e9d1f"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOReadMesh.js",revision:"a63de7fcf55ddbb1074e1fdd1573e4fd"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOReadMesh.umd.js",revision:"5f0b64194d59d4b4a7ad3d5c49dd13ac"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOWriteMesh.js",revision:"346e03a449ecd86617b2a0cfc3cd2814"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOWriteMesh.umd.js",revision:"5e1ea5e39cb3dced1f58ef737d0691f5"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOReadMesh.js",revision:"b82d0c5af2f6b6ee8269d120da5d1755"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOReadMesh.umd.js",revision:"abd9345f9469d11baa6b033d0d83e17c"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOWriteMesh.js",revision:"1a55b8067f4d7f46612ea8536a45ecde"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOWriteMesh.umd.js",revision:"d9e1b2dabc3b1e10bb9d14a18466ccdc"},{url:"itk/mesh-io/MeshToPolyData.js",revision:"21effcce4c19492b10c1762f7d6cb19c"},{url:"itk/mesh-io/MeshToPolyData.umd.js",revision:"641305ba2643284078a0d1957d6f8941"},{url:"itk/mesh-io/OBJMeshIOReadMesh.js",revision:"8d8034669b7e0aebda948890e997028b"},{url:"itk/mesh-io/OBJMeshIOReadMesh.umd.js",revision:"6f44920be4480b0680c3eea033cd149b"},{url:"itk/mesh-io/OBJMeshIOWriteMesh.js",revision:"2b7d6ef7ca6b658faf45bf78e425a623"},{url:"itk/mesh-io/OBJMeshIOWriteMesh.umd.js",revision:"dafa49ba0500e5e43a4064c96f0fe176"},{url:"itk/mesh-io/OFFMeshIOReadMesh.js",revision:"e8030b362f04a2b146fb93ba276abc01"},{url:"itk/mesh-io/OFFMeshIOReadMesh.umd.js",revision:"fa3729b36ab669b010cc991cf04f7588"},{url:"itk/mesh-io/OFFMeshIOWriteMesh.js",revision:"e7d8e0ab7ad466f4325620c1378d7472"},{url:"itk/mesh-io/OFFMeshIOWriteMesh.umd.js",revision:"7cf5b1492df6fa36cb75853e1d3a9bb2"},{url:"itk/mesh-io/PolyDataToMesh.js",revision:"8be4ac0329b0dbed65f04dd96394eb77"},{url:"itk/mesh-io/PolyDataToMesh.umd.js",revision:"2dbffb8c42d45699fb58f8e6f31ac878"},{url:"itk/mesh-io/STLMeshIOReadMesh.js",revision:"2ce071e0460aaa3ca12c763c30dec804"},{url:"itk/mesh-io/STLMeshIOReadMesh.umd.js",revision:"833202d174026b11ef5b919ad765d82d"},{url:"itk/mesh-io/STLMeshIOWriteMesh.js",revision:"e20e6c1bc809643bc32ee2dcd83d0797"},{url:"itk/mesh-io/STLMeshIOWriteMesh.umd.js",revision:"b7c9118606469044200647f276ddae60"},{url:"itk/mesh-io/SWCMeshIOReadMesh.js",revision:"3e76a8ebe7eec1ea71c60a8320d754a7"},{url:"itk/mesh-io/SWCMeshIOReadMesh.umd.js",revision:"88aa7d5fbc598b378bded5ab876f071e"},{url:"itk/mesh-io/SWCMeshIOWriteMesh.js",revision:"5b07e0d21bdde2747947515db5ec94a4"},{url:"itk/mesh-io/SWCMeshIOWriteMesh.umd.js",revision:"097c2d4ab0134b2ef7347214b9ca907e"},{url:"itk/mesh-io/VTKPolyDataMeshIOReadMesh.js",revision:"d2dae2f6950d39b26949b4d85bdd33d4"},{url:"itk/mesh-io/VTKPolyDataMeshIOReadMesh.umd.js",revision:"5a1c1deb720f05b549c46bdd1f9967bb"},{url:"itk/mesh-io/VTKPolyDataMeshIOWriteMesh.js",revision:"04a5dbaa87280a621425934b409d89e5"},{url:"itk/mesh-io/VTKPolyDataMeshIOWriteMesh.umd.js",revision:"be428df02bbb034c9fef82dcd46b4e4a"},{url:"itk/mesh-io/WASMMeshIOReadMesh.js",revision:"d2a727331965e209536319069e4a64f5"},{url:"itk/mesh-io/WASMMeshIOReadMesh.umd.js",revision:"45c56a8b91ed1dcf0da3f1736eb3f8be"},{url:"itk/mesh-io/WASMMeshIOWriteMesh.js",revision:"06f6c0157f34a8f631fcc2c58e331f8c"},{url:"itk/mesh-io/WASMMeshIOWriteMesh.umd.js",revision:"7fff15224c76581ea7a67f409da7f275"},{url:"itk/mesh-io/WASMZstdMeshIOReadMesh.js",revision:"fc3fda80912d18f40ccede66934602b8"},{url:"itk/mesh-io/WASMZstdMeshIOReadMesh.umd.js",revision:"63cdf3a1ef447ed19a0f496b0947b74b"},{url:"itk/mesh-io/WASMZstdMeshIOWriteMesh.js",revision:"e25390cee3b1ca63d55aac6a2c509b1a"},{url:"itk/mesh-io/WASMZstdMeshIOWriteMesh.umd.js",revision:"045ba5a0dd910b1be8000ba355d913f7"},{url:"itk/mesh-io/index.js",revision:"42e289049b54466b634c99bb6786a5c7"},{url:"itk/pipeline/BloscZarr.js",revision:"21093388088f6e3703d6264a4729c359"},{url:"itk/pipeline/BloscZarr.umd.js",revision:"c84197a47dce929480c2c74b218eface"},{url:"itk/pipeline/Downsample.js",revision:"093442a2dd1a5bd8bea5d44bd8928482"},{url:"itk/pipeline/Downsample.umd.js",revision:"24734a2135cb0b39778a2555589f9297"},{url:"itk/pipeline/DownsampleLabelImage.js",revision:"2bb923b36ac7cd7f75ed96bad390852a"},{url:"itk/pipeline/DownsampleLabelImage.umd.js",revision:"ab5f0492858a525c2a7d4b66bddc7a4f"},{url:"itk/web-workers/IOInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/ITKConfig.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/RunPipelineInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/WebWorkerInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/bundles/pipeline.worker.js",revision:"56a2d7c0313b16701008a62b0c8c65eb"},{url:"itk/web-workers/loadImageIOPipelineModule.js",revision:"4541e2633d10d8bc7dcb1facfff5992f"},{url:"itk/web-workers/loadMeshIOPipelineModule.js",revision:"f8a268fab4475faa3a524b5d60727f26"},{url:"itk/web-workers/loadPipelineModule.js",revision:"6fe0cc1fb1e78a669383684c3a59be6e"},{url:"itk/web-workers/min-bundles/pipeline.worker.js",revision:"b886fae3388a5b26b62ae5348ea5edad"},{url:"itk/web-workers/pipeline.worker.js",revision:"fcade677d45da0746e8b2abba4ae98ed"},{url:"itk/web-workers/runPipeline.js",revision:"01b4ef63574db0600aa6f38718a0de5d"},{url:"itkVtkViewer.js",revision:"f1c4acbd9551dce677aa32f884611b36"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/(\.js|\.png|\.wasm)$/,new e.StaleWhileRevalidate({cacheName:"itk-vtk-viewer-StaleWhileRevalidate",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:1209600})]}),"GET")}));
//# sourceMappingURL=serviceWorker.js.map
