Search.setIndex({docnames:["1_quadrature","2_finite_elements","3_meshes","4_function_spaces","5_functions","6_finite_element_problems","7_boundary_conditions","8_nonlinear_problems","L1_introduction","L2_fespaces","L3_interpolation","L4_feprobs","L5_convergence","L6_mixed_problems","fe_utils","fe_utils.solvers","implementation","index","practicalities","tools","zbibliography"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["1_quadrature.rst","2_finite_elements.rst","3_meshes.rst","4_function_spaces.rst","5_functions.rst","6_finite_element_problems.rst","7_boundary_conditions.rst","8_nonlinear_problems.rst","L1_introduction.rst","L2_fespaces.rst","L3_interpolation.rst","L4_feprobs.rst","L5_convergence.rst","L6_mixed_problems.rst","fe_utils.rst","fe_utils.solvers.rst","implementation.rst","index.rst","practicalities.rst","tools.rst","zbibliography.rst"],objects:{"":{fe_utils:[14,0,0,"-"]},"fe_utils.finite_elements":{FiniteElement:[14,1,1,""],LagrangeElement:[14,1,1,""],lagrange_points:[14,4,1,""],vandermonde_matrix:[14,4,1,""]},"fe_utils.finite_elements.FiniteElement":{cell:[14,2,1,""],degree:[14,2,1,""],entity_nodes:[14,2,1,""],interpolate:[14,3,1,""],node_count:[14,2,1,""],nodes:[14,2,1,""],nodes_per_entity:[14,2,1,""],tabulate:[14,3,1,""]},"fe_utils.function_spaces":{Function:[14,1,1,""],FunctionSpace:[14,1,1,""]},"fe_utils.function_spaces.Function":{function_space:[14,2,1,""],integrate:[14,3,1,""],interpolate:[14,3,1,""],name:[14,2,1,""],plot:[14,3,1,""],values:[14,2,1,""]},"fe_utils.function_spaces.FunctionSpace":{cell_nodes:[14,2,1,""],element:[14,2,1,""],mesh:[14,2,1,""],node_count:[14,2,1,""]},"fe_utils.mesh":{Mesh:[14,1,1,""],UnitIntervalMesh:[14,1,1,""],UnitSquareMesh:[14,1,1,""]},"fe_utils.mesh.Mesh":{adjacency:[14,3,1,""],cell:[14,2,1,""],cell_edges:[14,2,1,""],cell_vertices:[14,2,1,""],dim:[14,2,1,""],edge_vertices:[14,2,1,""],entity_counts:[14,2,1,""],jacobian:[14,3,1,""],vertex_coords:[14,2,1,""]},"fe_utils.quadrature":{QuadratureRule:[14,1,1,""],gauss_quadrature:[14,4,1,""]},"fe_utils.quadrature.QuadratureRule":{cell:[14,2,1,""],degree:[14,2,1,""],integrate:[14,3,1,""],points:[14,2,1,""],weights:[14,2,1,""]},"fe_utils.reference_elements":{ReferenceCell:[14,1,1,""],ReferenceInterval:[14,5,1,""],ReferenceTriangle:[14,5,1,""]},"fe_utils.reference_elements.ReferenceCell":{dim:[14,2,1,""],entity_counts:[14,2,1,""],point_in_entity:[14,3,1,""],topology:[14,2,1,""],vertices:[14,2,1,""]},"fe_utils.solvers":{helmholtz:[15,0,0,"-"],mastery:[15,0,0,"-"],poisson:[15,0,0,"-"]},"fe_utils.solvers.helmholtz":{assemble:[15,4,1,""],solve_helmholtz:[15,4,1,""]},"fe_utils.solvers.mastery":{solve_mastery:[15,4,1,""]},"fe_utils.solvers.poisson":{assemble:[15,4,1,""],boundary_nodes:[15,4,1,""],solve_poisson:[15,4,1,""]},"fe_utils.utils":{errornorm:[14,4,1,""]},fe_utils:{finite_elements:[14,0,0,"-"],function_spaces:[14,0,0,"-"],mesh:[14,0,0,"-"],quadrature:[14,0,0,"-"],reference_elements:[14,0,0,"-"],solvers:[15,0,0,"-"],utils:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:data"},terms:{"1_k":12,"2_v":12,"2ab":11,"2xy":1,"4th":17,"abstract":1,"byte":5,"c\u00e9a":12,"case":[0,1,3,4,5,6,7,8,9,10,11,12,16,19],"class":[0,1,2,3,4,11,12,14,19],"default":14,"final":[8,9,11,12],"function":[0,2,5,6,7,8,9,10,11,12,14,15,16,17,20],"g\u00e2teaux":17,"gau\u00df":17,"import":[0,3,5,7,10,11,12,15,16,18,19],"int":[3,8,12],"long":4,"na\u00efv":5,"new":[5,7,12,16,19,20],"public":19,"return":[0,8,10,12,14,15,16],"switch":[5,16],"true":[1,7,11,14,15],"while":[0,3,4,6,16],But:19,For:[0,1,2,3,4,5,7,8,9,10,11,12,14,16,19],Going:[9,12],Not:12,One:[2,3,5,19],That:[1,2,4,5,16,19],The:[0,2,4,6,7,8,9,10,11,12,14,17,18,20],Then:[1,3,4,5,7,8,9,10,11,12],There:[4,5,6,7,10,11,12,16,19],These:[8,11,12,16],Use:[1,4,19],Using:[0,5,11,12,17],With:[6,11],__init__:[1,3,4],_hu:10,_hw:12,a_0:1,a_1:1,a_2:1,abil:18,abl:[0,1,2,5,9],about:[0,1,5,7,8,9,10,11,12,16],abov:[0,3,5,7,8,9,11,12,16],absolut:[4,7],accept:7,access:[0,4,14,17],accomplish:[1,3],accord:9,accordingli:16,account:[6,7,10,19],accredit:17,accross:18,accuraci:[0,4,7,8],achiev:[0,3,4,7,9,19],acm:20,acquir:18,across:[3,4],activ:[0,12,17,19],actual:[0,3,4,5,6,7,8,12,16],adapt:12,add:[4,5,16],added:5,adding:[3,5,10],addit:[0,3,5,6,7,11,12,18],addition:18,address:[4,5,8,11,12,19],adj:[2,3],adjac:[3,8,14,17],adopt:[0,2,4,19],advanc:16,advantag:[0,1,14],affin:[4,9],after:[1,7,12],again:[1,4,7,9,12,19],agre:[9,11,12,16],agreement:9,ahead:[4,19],aim:[8,17],algebra:[8,9],algorithm:[1,3,4,7,8,12,17,20],all:[0,1,2,3,4,6,7,8,9,10,11,12,14,16,18,20],alloc:3,allow:[9,11,12],along:[3,12,16],alpha:[4,5,10,11,12],alpha_1:10,alpha_d:10,alpha_i:10,alphabet:16,alreadi:[0,3,5,7,10,12,16],also:[1,2,3,5,7,8,9,10,11,12,15,16,18,19],altern:[0,16],although:7,alwai:[0,2,3,7,16,19],among:2,amongst:8,amount:0,anaconda:19,analys:[10,12],analysi:[8,10,11,12,18],analyt:[5,12,15],ani:[0,1,2,8,9,11,12,16,19],anim:[2,3],announc:18,anoth:[7,9,12],answer:[3,7,8,11,16],anyon:16,anyth:16,anywai:[12,19],anywher:17,appar:7,appli:[1,4,5,7,8,9,10,11,12,18,19],applic:[5,12],appreci:17,approach:[7,8,12],appropri:[1,3,7,9,16],approv:18,approx:[4,5],approxim:[0,4,5,7,8,9,11,17],apt:19,arbitrari:[0,3,4,7,9,12],arbitrarili:12,area:[8,12],argument:[1,3,7,9,10,12,14],argyri:[9,11],aris:[5,11],arithmet:[7,11],arm:2,around:[5,12,19],arrai:[0,1,3,4,5,8,14,16,19],arrang:9,arriv:0,art:19,ascend:[2,3],asid:8,ask:11,aspect:[8,10,12],assembl:[6,8,15,17],assess:17,assign:[9,10],associ:[1,2,4,7,9,14,17],assum:[1,5,7,8,9,12,14,16,17],assumpt:[5,8],assur:12,astrophys:8,atom:19,attempt:[7,16],attent:2,aubin:12,author:17,auto:19,autom:16,avail:[0,1,2,3,4,5,14,16,17,18,19,20],averag:[11,12,17],avoid:[4,5,7,8,10,11,16],awar:19,b_0:1,b_1:1,b_2:1,b_i:9,back:16,backup:19,balanc:18,ball:[10,12],bar:[8,11],base:[2,5,6,8,14,16,19],bash:[0,16,19],basi:[2,3,5,6,7,8,9,10,11,12,14,17,20],basic:[0,1,10,12,18,19],basis_coef:1,becaus:[0,1,4,6,8,10,11,12],becom:[0,1,4,5,7,9,10,11],been:[3,7,12,16],befor:[4,6,7,9,16,18,19],begin:[1,3,7,8,10,12],behav:12,behind:9,being:[4,7,8,9,11,16],below:[10,11,12],bespok:12,best:[4,16],beta:[4,5,10,12],better:[17,19],between:[0,1,2,3,5,7,8,9,11,12,14,15,16,17,18],beyond:[4,6,7,9,12],big:0,bigg:5,bilinear:[11,12],billion:5,bin:16,binomi:1,biologi:8,bit:[12,19],black:[2,3],blackboard:[16,17],blend:8,blogg:19,bloggs12:19,blue:[2,3],bmatrix:1,board:16,book:17,bookkeep:4,both:[7,8,11,12,15],bound:[9,10,11,12],boundari:[1,3,4,5,7,8,9,10,11,12,15,16,17],boundary_nod:[6,15],bounded:11,box:16,bracket:3,branch:17,brenner:[11,17],breviti:4,brew:19,brief:19,bring:7,broader:8,bug:19,build:[8,9,11,16],built:[9,10,14],button:16,c_0:[1,3,4,10,12],c_1:[1,10,11,12],c_2:1,c_k:[10,12],c_kd:[10,12],c_kd_k:10,calcul:[0,4,5,7,8,9,14],calculu:[0,10,18],call:[1,7,8,9,10,11,16,19],can:[0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,19],cancel:6,cannot:7,cap:[8,12],care:8,carefulli:1,carpentri:19,cartesian:[0,10,11],cauchi:[11,12],caus:[7,16],cdot:[1,4,5,6,7,8,11,12],cdt:18,cell:[0,1,5,9,10,12,14,17],cell_count:14,cell_edg:14,cell_nod:[3,4,14],cell_vertic:14,centr:[9,12],certain:[11,19],cg1:4,cg1f:4,chain:5,challeng:[8,12],chang:[0,5,10,11,16,19],chapter:[1,2,9,19],check:[1,5,8,9,11,12],checklist:17,checkout:16,choic:[0,1,3,8,11,12],choos:[0,3,4,5,7,9,11,12],chosen:[5,6,8,12],cia02:[1,20],ciarlet:[1,17,20],circ:10,circumst:7,cl_1:9,clariti:16,classic:[1,7],classroom:16,clean:16,clear:[7,9,16],click:[16,19],clone:17,close:[9,11,12,16],closur:[8,9],coars:12,code:[0,1,4,5,8,17],codimens:2,coef:1,coeffic:1,coeffici:[1,4,5,7,8,9,11,12,14],coerciv:[11,12],coincid:12,colin:[17,18],collaps:0,collect:16,colleg:[17,19,20],color:19,colour:19,column:[1,3,5,6],com:[16,19],combin:[0,8,9,10,11,12,19],come:[4,5,11,12],command:[0,5,16,17],comment:[5,17],commit:[0,16],common:7,commonli:[0,1,7],commun:16,compact:12,compar:[0,7,16],compens:12,complain:5,complet:[0,1,5,6,11,12,14,16,18,19],complex:2,complic:[5,8],compon:[1,5,7,9,11,16,17,18],compos:[0,2,6,8,14,17],comprehens:0,compris:[0,9],comput:[0,1,4,5,7,8,11,12,16,17,20],computation:9,concentr:8,concept:[1,2,8,11],concern:[0,4,5],conclud:9,condit:[1,5,7,8,9,10,11,12,15,16,17],conduct:[5,18],confid:[11,19],config:19,conflict:19,conform:12,connect:[9,12],consequ:[2,6],conserv:5,consid:[0,1,2,6,7,8,9,10,11,12],consist:[0,1,3,7,9,17],constant:[0,1,4,8,9,10,11,12],constitut:7,construct:[2,3,4,5,7,8,9,10,11,14,17],consult:5,consum:5,contact:18,contain:[1,3,4,5,6,8,9,10,11,12,14,16,18],content:17,context:[12,19],continu:[1,4,8,10,11,12,17],contract:1,contribut:[4,8,10],control:19,convei:16,conven:16,conveni:[0,1,2,5,19],convent:[0,2,4,7,16],convention:10,converg:[6,7,11,15,17],convers:11,convert:16,convex:[11,12],coordin:[0,1,2,5,9,14],copi:[17,19],core:[0,1,19],corollari:12,correct:[1,3,4,5,6,7,16],correctli:19,correspond:[0,1,2,3,4,5,6,7,8,9,10,11,12,14],cos:5,cosmolog:8,cost:[0,7],cotter:[17,18],could:[4,19],count:16,counter:12,coupl:[5,9],cours:[0,1,2,4,5,8,9,10,11,12,16,17,18,19],coursework:18,cover:[1,7,8],creat:[0,1,2,3,7,17,19],creation:16,credit:17,crouzeix:12,crucial:16,cube:9,cubic:9,cup:8,current:[4,5,8,12,16,19],curv:[2,4],d_1:2,d_2:2,d_w:12,data:[5,17],date:[16,19],david:[17,18],deadlin:[16,18],deal:[1,2,5,9],debug:[14,16,19],debugg:16,decompos:6,decomposit:[5,9,10],decreas:[7,8],deem:7,deeper:[12,17],defens:7,defin:[0,1,2,3,4,5,7,8,9,10,11,12,14],definit:[1,2,5,6,7,8,9,11,12],deg:9,degener:9,degre:[0,1,2,3,4,5,8,9,10,12,14,15],delta:3,delta_:[1,7,8,9],demand:0,denot:[8,9,10,11,12],dens:[5,12],depart:[18,19],depend:[3,4,5,7,10,11,12,20],deriv:[1,5,9,10,11,17],describ:[2,5,6,12,14,16],descript:[8,16],design:8,desktop:19,det:4,detail:6,determin:[1,4,7,9,11],deu11:[7,20],deuflhard:20,develop:[8,9,10,11,12,16],diagon:[5,6],diamet:[0,10,11,12],dictionari:[3,14],didn:19,differ:[0,1,4,5,6,8,12,14,15,16,19],differenti:[4,5,6,7,8,12],difficult:7,diffus:7,dim1:14,dim2:14,dim:[1,2,3,4,5,14],dimens:[1,2,3,4,5,8,9,14,16,17,18],dimension:[0,1,2,3,5,9,10,11,12,14,16],direct:[3,6,7,8,10,14,15],directli:[7,9,10,12],directori:[0,16],dirichlet:[8,11,15,17],discontinu:[9,12],discov:[3,5],discret:12,discretis:[0,12,17],discuss:[4,8,9,10,11,12],displaystyl:[5,7],distinct:16,distinguish:[4,12],distribut:19,diverg:[7,11],divid:[10,12],document:17,doe:[4,5,8,9,12],doi:20,doing:18,domain:[2,4,5,6,8,9,10,11,12,14],don:[0,5,16,19],done:[1,4,12,16,19],dot:[0,7],doubl:19,doubt:16,down:[0,16],download:[16,19,20],drive:7,driven:12,drop:16,dropdown:16,dtype:3,dual:[1,9,10,11],dualiti:12,due:[0,5,10,12,16],duffi:0,dure:[16,18,19],dyman:18,dynam:8,e_0:9,e_1:9,e_d:3,e_i:9,e_in_i:9,e_j:9,e_jv_:9,e_k:9,each:[0,1,2,3,4,5,6,7,8,9,10,11,14,15],earli:16,earlier:16,earn:16,earth:18,easi:[0,19],easier:[5,16,19],easili:10,edg:[0,2,3,8,9,11,12,14],edge_vertic:14,edit:17,editor:[16,19],educ:19,effect:[0,1,6,7],effici:[0,4,5,8,12,20],effort:7,einstein:1,einsum:[1,4],either:[3,8,19],elast:8,elect:18,electromagnet:8,eleg:[8,15,16],element:[2,3,6,7,10,14,15,16,17,18,20],ellipt:[8,12,20],els:[7,16],elsevi:20,elsewher:20,email:[17,19],embed:16,emerg:8,emph:[9,11,12],emploi:[0,1,2,3,4,5,7,15,16],empti:5,emptyset:8,enabl:[1,4,5,11,16,19],encod:[0,2,7],encount:[1,11],encourag:16,end:[1,3,7,8,16,18],enforc:9,engin:[5,16,20],enjoi:5,enrol:18,ensur:[1,2,3,5,7,18],entir:8,entit:3,entiti:[1,3,9,11,14,17],entitl:9,entity_count:14,entity_nod:[1,3,14],entri:[1,3,5,6,8],enumer:9,environ:16,epilogu:17,epsilon:[3,7,10,12],equal:[1,5,8,11,12],equat:[1,3,5,6,7,9,11,12,15,17],equip:[9,11],equispac:[1,3,14,15],equiv0:9,equiv:[8,9,11],equival:[1,2,4,5,7,8,9,11,12],error:[0,7,8,15,16,17,19],errornorm:[4,5,14],especi:16,ess:12,essenc:7,essenti:[5,6,7,19],estabilish:11,establish:[1,2,3,8],estim:[7,10,11,12],etc:[8,9],evalu:[0,1,4,7,8,9,10,11,12,14],even:[0,5,8,12],eventu:19,ever:7,everi:[2,4,8,12,16],everyth:12,everywher:[3,6,8,12],exact:[4,5,11,12,17],exactli:[0,4,19],exam:18,examin:[12,17],exampl:[2,3,4,5,6,7,8,9,10,11,12,14,16,17,18,19],except:[1,7,11],exception:5,exchang:10,exclud:1,execut:[1,5,16,19],exempt:18,exercis:[1,4,6,7,8,9,12,14,17,18,19],exhibit:19,exist:[5,8,10,11,12],exot:17,expand:[7,8,9],expans:[9,17],expect:[5,7],expedi:7,expend:7,expens:12,experi:5,experienc:16,explain:[6,8,9],explan:[6,16],explicit:7,explicitli:[3,5,7,9,12],exploit:[5,8],explor:9,expos:8,express:[0,1,3,5],extend:[1,3,6,8,9,10,12,17],extens:[1,3,10,17,18],extra:12,extrem:10,eye:16,f_1:8,f_2:8,f_i:[1,4,8,9],f_j:9,f_jn_i:9,f_k:5,face:[2,3],facet:[2,12],facil:[2,19],facilit:12,fact:[4,7,10],factor:4,fail:[7,16,19],failur:16,fairli:5,fals:[14,15],famili:[0,3,9],familiar:[0,16,18,19],famou:11,far:[2,4,7,9,10,11],fe_install_venv:16,fe_install_venv_win:16,fe_util:[0,3,4,5,6,16,19],featur:[2,6,12,19],feedback:[17,19],few:[0,5,8,9,16],fiat:20,field:[1,8],fig:[2,3],file:[1,15,16,19],financ:8,find:[1,3,4,5,6,7,8,9,11,12,15,16,19],fine:[5,16],finish:11,finit:[0,2,3,6,7,10,14,15,16,17,18,20],finiteel:[1,3,14],first:[0,1,3,4,5,7,9,11,12,16,17,18,19],firstli:12,fit:12,fix:[2,16,19],flexibl:[8,12],fluid:[8,18],flux:12,focu:12,focuss:19,follow:[1,2,3,5,8,9,10,11,12,16,19],footnot:[1,2,3,5],foral:[3,4,5,6,7,8,9,10,11,12],forc:5,forget:[0,16],fork:[0,17],form:[0,1,3,4,5,6,8,9,12,14,17],formal:[2,17,18],formalis:[1,9],format:[5,19],formul:[10,11,17],formula:[3,4,5,12],fortun:[4,17],forward:6,found:[1,16],four:[9,17],fourth:[16,18],frac:[0,1,4,5,7,8,9,10,11,12],framework:[12,16],free:[5,19],freedom:[2,3,4],freqent:5,frequent:[0,2,7],fridai:16,from:[0,1,2,3,5,6,8,9,10,11,12,16,17,19,20],full:[1,3,4,5,7,11,12],fulli:3,function_spac:[3,4],functionspac:[3,4,14],fundament:[4,9,11],further:[8,9,11,12],furthermor:0,gain:[12,16],galerkin:17,gamma:[5,6,7,8,11,12],gamma_0:11,gamma_h:11,gauss:14,gauss_quadratur:[0,14],gener:[1,3,4,7,8,9,10,11,12],generalis:[0,1,12,14],geometr:[2,5,9,10,11,14],geometri:[0,11,14,17],geq:[2,8,9,10,11],get:[10,11,12,17],gigabyt:5,gist:17,git:[16,17],github:[16,17],give:[7,8,10,12,17,19],given:[0,1,2,3,4,5,7,8,9,10,11,12,14,15],global:[0,2,4,5,6,8,12,14,17,19],glue:9,goal:[8,12],goe:11,going:[11,16],good:[1,19],goodi:19,grad:[1,14],gradient:[4,9,14,17],great:12,greater:5,greek:4,grid:1,ground:7,grow:12,guarante:[6,7,9,12],guess:7,guid:[5,9,12,19],guidanc:5,h_1:5,h_2:5,half:16,ham:[17,18],hand:[7,9,10,11,15,17],handi:19,happen:[11,19],hard:[12,16],harder:5,has:[0,1,2,3,5,6,7,8,9,10,11,12,14,16,17],hat:[3,4,5,7,9],have:[0,1,2,3,4,5,6,7,8,9,10,11,12,16,18,19],haven:19,heart:0,hell:17,helmholtz:[5,6,11,14,16,17],help:[1,2,5,6,9,10,11,16,19],helpfulli:0,henc:[0,1,9,10,11,12],here:[0,1,2,3,4,5,6,7,8,9,11,12,16,17,19,20],hermit:9,hessian:9,heurist:7,hexahedr:4,high:[0,5,18],higher:[0,1,2,7,8,9,10,14],hilbert:[12,17],hint:16,hit:7,hold:[3,8,9,11,12,20],homebrew:19,homogen:17,hopefulli:7,host:19,hour:[16,17],how:[1,3,7,8,9,10,12,17,19],howev:[0,1,2,3,4,5,7,12,16,17,18,19],http:[16,19],hub:19,huge:8,hundr:[5,7],hybridis:12,hyperplan:9,hypothesi:9,i_0:2,i_1:9,i_d:9,i_hu:12,i_k:[2,10],i_ku:10,i_kv:10,i_l:9,icon:[16,19],idea:[0,8,9,12],ident:[1,5,10,12],identifi:[2,7,8],iff:[9,11],ignor:[1,6],ijcs:20,ijk:1,ilk:1,ill:1,illustr:[1,3,4,5,9,11],imag:11,immedi:[1,9,10,11,12],immers:[2,14],impact:5,imperi:[17,19,20],implement:[14,18,19],impli:[0,3,4,6,9,11,12],implic:3,improv:0,in_d:3,incid:14,includ:[1,8,9,11,12,16],incomplet:[16,17],incorpor:[1,16],incorrect:6,increas:[0,5,7,8],increasingli:1,inde:[5,7,9],indefinit:5,independ:[0,5,11,12],index:[2,3,4,5,10,16],indic:[1,3,4,5,7,8,10,14],indirect:4,individu:[4,8],induct:9,ineffici:[4,7],inequ:[10,11,12],infinit:[7,11],inform:[0,2,16,18],infrastructur:16,infti:[8,9,10,11,12],infty_0:12,inhomogen:17,initi:[7,8],inner:[7,11],input:[1,4],insid:[9,10],inspect:9,instal:[16,19],instanc:[5,18],instead:[5,6,7,11,12,15,16],institut:20,instruct:[2,5,6,7,19],insuffici:9,int_0:[0,10,11],int_:[0,4,5,6,7,8,10,11,12],int_b:10,int_c:[4,5],int_k:[8,10,11,12],integ:[3,10,12],integr:[0,1,2,3,5,6,7,9,10,12,14,17],integrand:[0,5,8],intellig:16,intend:[7,8],interest:[1,10,11],interfac:5,interfer:16,interior:[6,8,9,12],intern:20,interpol:[2,7,8,11,14,17],interpret:[3,5,11,12],intersect:[8,11],interspers:16,interv:[0,2,9,11,14],introduc:[8,9,10,11,12],introduct:[1,17],introductori:0,inv:1,invari:0,invers:5,invert:[1,8,9],investig:[4,10],involv:[1,3,5,7,9,10,12,16,19],issu:17,item:8,iter:[7,12],its:[0,1,4,7,14,16,19],itself:[2,3,7,8,9,12],ix_:5,jacobian:[4,5,7,14],jane:19,java:18,jmc:18,join:9,journal:20,judgement:7,jump:12,just:[1,2,3,5,7,8,9,10,12,16,19],k_1:[9,10,12],k_2:9,k_i:[8,9,10,11,12],k_j:8,k_m:9,k_n:9,keep:16,kei:[3,4,16],kind:8,kir04:[1,20],kirbi:20,kn_i:10,know:[1,2,4,5,7,8,9,10,11,12,19],knowledg:[12,17],known:[0,4,5,8,11],l_1:9,l_1q_1:9,l_2:[9,12,17],l_3:9,l_u:11,lab:[7,16,17,18],label:[2,8,11,14],laboratori:17,lagrang:[3,4,5,9,12,14,15,17],lagrange_point:[1,3,14],lagrangeel:[1,3,4,14],languag:[9,18,19],laplacian:5,laptop:19,larg:[7,16],larger:[7,14],largest:[0,2],last:[1,10],later:[0,2,8,9,10,11,16],lax:[11,12],layer:12,layout:3,ldot:[1,2,3,4,7,8,9,10,11],lead:[9,10,11,12],learn:[7,8],least:[1,3,8,19],lebesgu:8,lectur:[7,16,19],led:[17,18],left:[0,1,3,6,7,8,9,10,11,12,14,16,17],legendr:[14,17],legitim:7,lem:9,lemma:[9,10,12],lend:8,length:0,leq:[0,1,3,5,8,9,10,11,12],less:5,let:[1,4,6,7,8,9,10,11,12,16],letter:4,level:[7,18],librari:[14,16],licenc:20,lie:[2,3,6],lies:[5,14],lightbulb:16,like:[5,6,8,9,11,12,16,19],likewis:5,lim_:[7,12],limit:[7,11,12],linalg:[1,4],line:[0,1,8,9,10,16,17],linear:[1,2,4,5,7,8,9,10,17],linearis:17,link:[17,19],linux:[16,17],lipschitz:[10,12],list:[0,1,2,3,4,14,15,16],littl:[4,19],live:14,load:1,loc:12,local:[2,4,5,12,17],locat:[2,4,8,14,16,19],log09:[2,20],log:19,logarithm:5,logg:20,london:[17,20],longrightarrow:2,look:[5,9,10],lookup:2,loop:[1,7,8],loos:2,lose:16,lot:[12,16,19],low:[1,5,14],lower:[0,2,10,16],lowest:0,m_v:5,m_w:[5,9],mac:[16,17],machin:[7,16,17],machineri:11,maco:19,made:[9,14],magnitud:8,mai:[0,1,2,3,4,5,7,9,10,11,12,16,19],main:[8,14,16],maintain:18,make:[0,1,2,3,4,5,6,7,8,10,11,12,14,16,17,19],manag:19,mani:[3,5,7,12,14,16,19],manifold:[2,14],manufactur:17,map:[0,4,5,7,10,11,17],march:16,mark:[17,19],master:[16,17,18],masteri:[6,7,14,17],match:[2,5,7,8],materi:17,math96063:17,math97017:17,math97095:17,math:[0,19],mathbb:[1,2,4,8,9,10,11,12],mathbf:[1,5,6],mathcal:[5,8,9,10,11,12],mathemat:[2,3,8,11,16,17,18,20],mathr:[8,11],mathrm:[0,1,4,5,6,7,8,12],matlab:[18,19],matric:19,matrix:[1,3,4,6,7,8,11,12,14,17],matter:[0,2,4,12,17],max:10,max_:10,max_kc_k:10,maximis:12,maximum:[1,5,7,8,10,11,12],mayb:0,mbox:[10,11,12],mean:[0,1,2,3,5,6,7,8,9,10,11,12,19],measur:[4,8,11,17],mechan:[0,7,9,19],meet:8,megabyt:5,member:[1,11,14],memori:[3,5],merg:16,merit:16,mesh:[0,4,5,7,8,9,11,12,15,17,20],messag:19,met:7,metadata:5,method:[0,1,2,3,4,8,11,12,14,15,16,17,20],mid:0,middl:[0,1,7],midnight:18,midpoint:[0,9],might:[1,4,5,7,8,11,12,16,19],milgram:[11,12],min_:12,mind:11,minim:[12,19],minimis:[12,16],minimum:[0,10,12],minut:[5,16],miss:16,mix:[10,12],mixtur:8,mode:16,model:[8,15,17],modif:0,modifi:[1,3,12,16],modul:[0,4,6,7,16,17,18,19],moment:8,monomi:1,monoton:7,more:[0,2,3,4,5,6,7,8,10,11,12,14,15,16,17,19],most:[0,1,8,14],mostli:[8,12],motiv:[8,11],move:[5,8,9,10,12],mre:18,msc:18,mu_:9,much:[10,12,16,19],multi:10,multipl:11,multipli:[0,1,5,8,12],multiscal:12,must:[1,3,8,9,16,18],n_0:9,n_1:9,n_2:9,n_3:9,n_4:9,n_9:9,n_d:3,n_i:[4,9,10,12],n_j:9,n_k:[9,11],n_w:9,nabla:[1,5,6,7,8,10,11,12],nabla_:4,nabla_x:5,name:[2,8,14,16,19],nan:1,nan_to_num:1,natur:[0,1,3,6,7,11],navig:[16,19],ncol:3,necessari:[4,6,7,9],need:[0,1,2,3,4,5,6,7,8,9,11,12,16,18,19],neighbour:[8,9],neq:[8,9,11,12],nest:9,network:[17,20],neumann:[6,8,11,12],never:[16,19],newton:[17,20],next:[1,5,6,7,8,9,10,11,12,18,19],nice:[11,12,19],night:18,nitsch:12,nobodi:16,nodal:[1,3,6,7,8,9,10,11,12],node:[2,4,5,6,7,14,15,17],node_count:14,nodes_per_ent:14,non:[4,5,6,7,8,9,12],nondegener:9,none:14,nonlinear:[15,17,20],nonzero:[2,5,7],norm:[5,7,8,10,11,12,14],normal:[1,5,8,9,11],notat:[1,5],note:[0,1,3,7,8,9,11,12,16,19],notic:[3,4],notifi:16,notion:[2,11],now:[0,1,4,5,6,7,8,9,10,11,12,16,19],nrightarrow:11,nrow:3,number:[0,1,2,4,5,6,7,8,10,11,12,14,15,17],numer:[1,7,8,11,12,15],numpi:[0,1,3,4,5,14,16,19],object:[0,1,2,3,4,14,16],observ:[2,4,7,8],obtain:[1,7,8,9,10,11,12,17],obviou:[1,3],obvious:[16,19],occasion:17,occur:[1,7,16,18],off:[0,5,7],offici:19,often:[3,12,16],omega:[4,5,6,7,8,9,10,11,12],onc:[1,4,5,7,8,16,19],one:[1,2,3,4,5,7,8,9,12,14,16,17,18,19],ones:[2,16],onli:[0,1,2,4,5,6,7,8,10,11,12,14,18],onlin:19,onto:[1,4,7,14],open:12,oper:[0,1,3,4,5,7,8,11,12,14,16,17],operatornam:[2,3],oplu:[6,7],opportun:[16,18],opposit:2,optim:[0,3,12],option:[3,14,16,19],order:[0,1,2,3,4,5,6,7,8,10,12,14,16,19],orient:[2,3],origin:[0,4,5,7,9,16],orthogon:12,oscil:1,other:[0,1,2,3,4,5,6,7,8,9,12,16,17,18,19],otherwis:[7,12],otim:0,our:[0,1,2,4,5,7,9,11,12,16,17],ourselv:[2,4],out:[1,3,5,7,8,9,11,12,16],output:[14,19],outward:[5,8,11],over:[0,1,2,3,4,5,7,8,9,10,11,12,14,19],overal:[7,18],overlap:8,own:[16,17],p_i:[9,11],pack:19,packag:[5,16,19],page:[16,19],paid:17,pair:[2,5,14],panic:19,parabol:8,paradigm:20,parallel:12,paramet:[1,12,14],part:[4,5,6,7,8,9,11,12,16,18],partial:[1,4,5,6,8,9,10,11,12],particular:[0,1,7,8,11,12,16],particularli:[0,5,16,17],pascal:1,pass:[1,3,12,16],password:19,past:19,path:16,pattern:[3,5],pdb:16,pde:[1,2,5,7,8,11,17,18],pdf:17,penalti:12,peopl:17,pep8:16,per:[5,17],perform:[2,7,8,14],perhap:12,person:19,perspect:[3,9],perturb:7,peter:20,petrov:12,phd:18,phenomena:12,phi:[1,5,7,10,11,12],phi_0:[1,9],phi_1:1,phi_2:[1,9],phi_:5,phi_i:[1,4,5,7,8,9,10],phi_if:8,phi_j:[1,5,7,8,9],phi_k:[5,9],philipp:20,physic:[5,8,12],pi_1:9,pi_2:9,pi_3:9,pi_l:9,pick:[11,16],piec:19,piecewis:[2,9,11],pink:16,place:[1,5,15,16],plan:19,planet:18,pleas:[17,18],plot:[1,3,8,14,15],plot_function_space_nod:3,plot_interpolate_lagrang:1,plot_lagrange_basis_funct:1,plot_lagrange_point:1,plot_mesh:2,plot_sin_funct:4,plu:[9,11,12,17],pmatrix:[1,3],point:[0,1,3,4,5,7,8,9,10,11,12,14,16,19],point_in_ent:[3,14],pointless:7,poisson:[6,7,11,12,14,17],polygon:[2,8,9,11,12],polyhedra:[2,12],polynomi:[0,1,3,4,5,8,9,11,12,14,17],poor:16,poorli:[1,14],popul:3,popular:0,pose:[1,12],posed:12,posit:[2,5,11,12,14],possibl:[0,3,8,12],post:19,power:1,practic:[0,5,7,11,17],precalcul:4,precis:[0,4,5,7,11,14,19],prefer:[0,7],preliminari:12,prescrib:0,presenc:4,present:[3,7,8,12],preserv:4,prettier:14,previou:[4,6,7,10,11,12],previous:[5,12],primari:3,primarili:17,principl:3,privat:[16,19],problem:[3,4,6,8,9,15,16,17,20],process:[0,1,3,4,5,7,8,19],prod_:[9,10],produc:[1,3,4,5,7,14,16],product:[0,1,7,11],prof:17,program:[4,16,18],programm:[12,16],progress:[16,18],project:[16,18,19],proof:[9,11,12],propag:12,properti:[1,5,10,11,12],proport:[5,12],proportion:8,propos:7,proposit:12,prospect:7,prove:[9,11,12],provid:[0,1,2,4,5,8,9,11,12,14,16,18,19],psi_0:9,psi_1:9,psi_i:9,psi_j:[4,5,9],psi_k:9,psi_l:9,pull:17,pure:[2,11],purpos:[0,1,5],push:[0,16],put:[3,4,8,19],pyramid:1,pytest:16,python3:19,python:[5,6,14,16,17,18],q_1:9,q_2:9,q_3:9,qquad:[3,5,6,7,10],quad:[2,4,5,8,9,11,12],quadrat:0,quadratur:[1,5,8,17],quadraturerul:[0,4,14],quadrilater:[0,2,4],qualifi:7,quantiti:[10,11],question:[3,5,8,11,12,16,17,18],quickli:12,quintic:9,quit:[14,16],quot:[10,12],radiu:[10,12],rais:[8,16,17],rang:[8,12],rank:[1,14],rapid:12,rate:[7,12],rather:[2,5,6,8,10,19],ratio:[10,12],raviart:12,reach:11,read:[2,4,5,16,19],readabl:16,reader:[4,5,7,16],real:[7,8,11],realis:[5,7],realist:7,realli:7,rearrang:[5,17],reason:7,recal:[1,4,5,11,12],receiv:16,reciev:[16,19],recommend:19,reconsider:7,reconstruct:8,record:[0,1,2,3,4,5,19],recurs:12,red:[2,3],reduc:[4,5,12],ref:9,refer:[1,3,8,12,14,17],referencecel:[0,1,2,3,14],referenceinterv:[0,14],referencetriangl:[0,14],refin:[7,8,11,12],reflect:3,regard:7,regim:7,region:10,regular:[1,2,12],rel:[1,7,19],relat:[8,11],relationship:[1,2,3,5,9,11,12],releas:7,relev:[0,1,3],remain:[6,9,12,16],remaind:10,rememb:[4,7],remot:16,remov:8,render:14,repeat:[9,12],replac:[1,6,8,12,16],repo:16,repositori:[0,17,19],repres:[1,2,3,9,11,14],represent:[1,2,7,20],request:[17,19],requir:[0,1,2,3,4,5,6,7,8,9,10,11,12,16,19],research:[8,12],residu:17,resolut:[4,7,8,15],resolv:12,respect:[1,5,7,9,10,12,14],rest:[1,2,7,8],restrict:[2,3,8,9,10,11,12],result:[0,1,3,4,5,6,8,9,10,11,12,14,15,16],return_error:15,reveal:12,review:[11,19],revis:[17,19],revisit:12,revolv:19,rewrit:[8,9],rewritten:5,rich:12,riesz:7,right:[0,1,3,4,6,7,8,9,10,11,12,15,16,17,19],rightarrow:[1,2,4,7],rigor:16,robust:12,role:[2,14],roman:4,root:10,routin:[14,19],row:[1,3,4,5,6,14],rule:[4,5,8,14,17],run:[0,1,2,3,5,6,15,16,19],s_0:11,s_1:11,s_2:11,s_i:11,s_k:11,sai:[5,7,8,9,10,11,12],same:[0,1,2,4,5,6,7,8,12,16,19],satisfi:[5,6,7,8,9,10,11,12],save:19,saw:[11,12],scalar:[5,7,9,11,14],scale:[7,10,12,18],scheme:[7,17],school:0,schwarz:11,scienc:[5,20],scientif:16,scipi:5,scope:[4,6],scott:[11,17],script:[0,1,2,3,5,15,16],search:[8,16],second:[5,8,9,10,11,12,16,18],section:[1,3,4,5,6,7,8,9,10,11,12,16],secur:19,see:[1,7,8,9,10,11,12,16],seek:[8,12],seem:11,seen:10,select:[11,12,16],self:[1,14],semicolon:7,seminorm:[10,11],sens:[0,8,10,11,12],separ:[3,11],sequenc:[4,7,11,12],seri:[1,7,10],servic:19,session:16,set:[0,1,2,3,4,5,6,7,8,9,11,12,14,17,19],setup:19,sever:[1,16],shall:[0,8,11],shape:[2,9,10,12,14],share:[2,3,11,17],shell:19,shift:9,shortli:8,should:[1,3,4,6,7,8,15,16,18,19],show:[0,2,5,8,9,11,12],shown:2,side:[0,4,6,7,8,10,11,12,15,17],sign:[5,19],signific:16,significantli:5,similar:[4,5,7,8,9,11,12,18],similarli:[0,2,6,9,10,19],simpl:[3,4,5,7,11,18,19],simplest:[1,4,7,11],simpli:[0,1,2,4,6,7,12,14,19],simplic:[0,2,4,5],simpson:0,simul:0,sin:[1,6,8],sinc:[1,3,4,5,6,7,8,9,10,11,12],singl:[0,1,4,5,9,10,14,18],singular:[10,11],size:[5,7,8,10,11,12],skeleton:[5,17,19],skill:16,skip:19,slightli:7,slowli:14,small:[0,5,7,16,19],smaller:[9,11],smallest:19,smooth:[8,9,12],sobolev:[10,17],softwar:[1,3,5,16,17,19,20],solut:[1,3,6,7,8,11,12,15,16,17],solv:[2,6,7,8,9,11,12,15,16,17,19],solvabl:[8,9,12,17],solve_helmholtz:15,solve_masteri:15,solve_poisson:15,solveabl:10,solver:[5,6,7,12,14,16],some:[0,1,3,4,5,6,7,8,10,12,16,17,18,19],someth:10,somewhat:[2,7,16],somewher:7,sourc:[2,7,14,15,16],space:[1,2,5,6,10,14,15,17],span:[6,7,14],spars:8,sparsiti:8,spatial:[1,4],speak:5,specif:[8,15,16],specifi:[1,2,3,4,6,8,9,14],speed:5,sphere:2,split:[7,10,11],springer:[17,20],sqrt:[5,11],squar:[0,2,3,5,9,10,11,14,15,17],ssh:19,stabil:[12,17],stabilis:12,stabl:[11,12],stackrel:5,stage:[0,3],standard:[9,10,12,16],star:[10,12],start:[4,5,8,9,10,11,12,16,17],state:[7,11,12,19],statement:[7,9,12],steadi:7,step:[1,5,6,7,11,12],still:[1,7,12],stitch:4,stop:16,storag:4,store:[1,2,3,4,5,14],straight:[0,2],straightforward:[3,4,5,6],strength:8,strictli:[5,19],strong:[8,12],strongli:5,structur:[3,5,9,11,12],student:[16,17,18],studi:[5,9,10],style:17,sub:1,subclass:1,subdivis:14,subdomain:8,subject:12,submiss:[16,18],submit:[16,17,19],subset:[9,10,11,12],subseteq:11,subspac:[7,8,9,11,12],substanti:16,substit:6,substitut:[5,7,12,16],subtract:[10,12],sudo:19,suffic:7,suffici:[0,1,3,4,5,7,11,16],suggest:[5,8,16,18],suitabl:[1,4,5,16,19],sum:[0,1,3,4,8,10,11],sum_:[0,3,4,5,8,9,10,11,12],sum_b:1,sum_c:5,sum_i:[1,4,5],sum_iu_i:8,sum_iv_i:8,sum_j:[1,4,5],sum_k:[5,12],sum_q:[4,5],summat:1,sundai:18,sup_:[10,11,12],support:[2,3,12,14],suppos:[1,4,5,12],sure:[0,1,16,19],surfac:[2,6],surpris:0,swamp:7,swap:1,symmetr:[6,11],symmetri:0,synchronis:17,system:[5,6,7,8,11,12,15,16,19],systemat:14,t_kf:10,tabul:[4,14,17],take:[0,1,4,5,6,7,8,9,10,12,14,16,18],taken:[5,7,10,11],talk:9,tangent:1,task:[3,5,12,16],taught:[0,17],taylor:[11,12,17],teach:17,techniqu:[7,9,11,12],tediou:4,tell:[10,12,16],templat:4,ten:7,tensor:1,term:[0,1,3,4,5,7,8,9,10,11,12,16,18],termin:[7,19],terminolog:9,test:[0,1,3,4,5,6,7,12,15,17],test_01_integr:0,test_02_lagrange_point:1,test_03_vandermonde_matrix:1,test_04_init_finite_el:1,test_05_tabul:1,test_06_vandermonde_matrix_grad:1,test_07_tabulate_grad:1,test_08_entity_nod:3,test_09_jacobian:4,test_10_integrate_funct:4,test_11_helmholtz_converg:5,test_12_helmholtz_converg:5,test_12_poisson_converg:6,test_script:16,tetrahedr:3,tetrahedra:2,tetrahedron:9,text:[17,19],textbook:[10,11],textrm:[0,4,5,6,7],than:[0,4,5,8,9,10,14,16,19],thei:[2,5,6,8,11,12,16,19,20],them:[0,2,3,5,11,12,16,19],theorem:[9,10,11,12],theoret:[9,10],theori:[5,12,17,18],therebi:7,therefor:[0,1,2,3,4,5,7,9,11,12,19],thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19],thing:[8,12,19],think:[1,7,10],third:[7,10,18],those:[2,3,4,5,6,7,9,16,18,19],though:[0,12],thousand:7,three:[1,3,9],through:[1,7,8,9,12,16,17,19],thu:[3,12],thursdai:18,tild:[4,5],time:[5,7,8,10,11,16,17,19],tip:[17,19],titl:16,to0:12,togeth:[0,4,7,8,9,10,12],toler:7,tom:20,too:[7,12],tool:[5,9,10,11,12,16,17],toolbox:[9,10],toolchain:19,top:16,topolog:[0,2,3,9,14,15],total:[5,14],toward:17,trace:[11,12],track:19,trade:[0,5,7],transact:20,transform:[0,4,9,11],translat:10,transpar:16,transpos:[1,5],trapezium:0,trapezoid:0,treat:[0,8],treatment:[7,8],tri:0,trial:[4,5,12],triangl:[0,1,2,3,8,9,10,11,12,14],triangul:[9,10,11,12,14,17],triangular:[2,5,9],trick:[10,12,17],trinomi:1,tripl:[1,9],trivial:[2,3,7],truncat:0,tune:7,tupl:[0,14],turbul:12,turn:[1,3,4,5,9,11,12],tutori:[0,16,17,18,19],twice:[5,16,18],two:[1,2,3,5,6,7,8,9,11,14,16,17,18],type:[8,10,12,16,17,19],typic:[0,2],u_0:[6,7,12],u_1:8,u_2:8,u_h:[5,8,11,12],u_i:[5,6,7,12],u_j:5,ubuntu:19,unbound:5,under:[3,8,11],underbrac:[5,6,9,10,11,12],undergradu:[0,18],underli:14,understand:[2,4,11,16,17],understood:4,undertaken:7,unfortun:[5,6],unimpl:0,union:8,uniqu:[2,3,8,9,11,12],unisolv:17,unit:[0,2,5,11,14,15,17],unitintervalmesh:[2,14],unitsquaremesh:[2,14],unknown:[1,4,8],unless:5,unlimit:19,unreason:7,unrel:11,unsurpris:1,unwant:1,updat:[7,12,17,19],upload:16,upon:8,upper:[10,16],upstream:16,url:[16,19],usag:[2,5],use:[1,3,4,5,6,7,8,9,10,11,12,14,16,17,19],used:[1,2,3,4,6,7,10,11,12,14,16,17],useful:[1,3,4,5,8,9,10,11,12,14,16],useless:19,user:[4,7,19],uses:[0,12],using:[0,1,2,3,4,5,8,9,10,12,14,15,16,19],usual:[0,1,3,4,7,8,9,12,16],utterli:7,v_0:[6,7,11],v_0g:7,v_h:[8,10,11,12],v_i:[8,11,12],v_j:[1,8,11],v_k:11,valu:[0,1,2,3,5,6,8,10,11,12,14,17],valuabl:16,vandermond:[1,14,17],vandermonde_matrix:[1,14],vanish:[3,6,7,8,9,11,12],vari:[4,5],variabl:[4,5,7,9,10,11,12],variat:17,varieti:5,variou:[2,5],vastli:5,vdot:1,vector:[1,2,3,4,5,6,7,8,9,11,12,14,18],venv:[0,17],veri:[0,2,4,5,7,8,11,12,16,18,19],verifi:[5,8,9],veritic:14,version:[7,12,17,19],versu:8,vertex:[0,2,3,4,8,9,11],vertex_coord:[4,14],vertex_count:14,vertic:[0,1,2,3,4,8,9,14],via:[8,18,19],video:[0,1,2,3,4,5,16],view:[5,8],virtual:12,visit:[4,5],visualis:1,vocabulari:9,volum:[0,4,12],w_h:0,w_j:12,w_p:0,w_q:[0,4,5],w_v:0,wai:[0,1,2,4,7,8,9,11,12,14,16,19],want:[3,4,10,11,16,19],watch:17,wave:12,weak:[5,6,7,17],web:16,webpag:[17,19],websit:16,week:17,weekli:16,weight:[0,1,14],welcom:17,well:[1,2,9,10,12,16,19],were:[7,17],what:[5,7,8,9,11,12,16,19],when:[0,1,2,4,5,7,8,9,10,11,12,16,19],where:[0,1,2,3,4,5,6,7,8,9,10,11,12,14],whether:[7,11,14,20],which:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,19],whilst:12,who:18,whole:[1,9,10],whose:[1,2,4,7,12,14],why:[0,8,11],wide:[12,14,19],window:[16,17],wish:[0,2,3,4,5,18],within:[2,3,4,10,12],without:[0,12],won:11,word:[0,1,2,4,5,7,11],work:[2,3,4,5,7,8,12,17,18,19],worth:[16,18],would:[1,2,5,7,8,9,11,12,15,16,17],write:[0,1,4,5,6,7,8,9,10,16,17,19],written:[4,8,11,16,19],x_0:[1,5,6],x_0y_0:1,x_1:[1,5,6,9],x_1y_1:1,x_d:9,x_h:0,x_i:[1,4,8,9,12],x_j:9,x_k:1,x_m:1,x_my_m:1,x_p:0,x_q:[0,4,5],x_v:0,y_0:1,y_1:1,y_i:1,y_m:1,year:[7,16,17,18],you:[0,1,2,3,4,5,6,7,11,12,16,18,19,20],your:[0,1,4,5,6,17,18,20],yourself:19,z_1:9,z_2:9,z_3:9,z_i:8,z_j:8,zero:[0,3,5,6,7,8,9,10,11,12]},titles:["1. Numerical quadrature","2. Constructing finite elements","3. Meshes","4. Function spaces: associating data with meshes","5. Functions in finite element spaces","6. Assembling and solving finite element problems","7. Dirichlet boundary conditions","8. Nonlinear problems","1. Introduction","2. Finite element spaces: local to global","3. Interpolation operators","4. Finite element problems: solvability and stability","5. Convergence of finite element approximations","Mixed finite element discretisations (Mastery topic)","fe_utils package","fe_utils.solvers package","The implementation exercise","Finite elements, analysis and implementation","Practical matters","Computational tools","9. References"],titleterms:{"function":[1,3,4],"g\u00e2teaux":7,"gau\u00df":0,The:[1,3,5,16,19],Using:19,access:19,accredit:18,activ:16,adjac:2,algorithm:[5,6],analysi:17,approxim:[10,12],assembl:5,assess:18,associ:3,assum:18,averag:10,back:5,basi:[1,4],between:4,blackboard:18,boundari:6,branch:16,cell:[2,3,4],chang:4,ciarlet:9,clone:16,code:[16,18,19],command:19,comment:16,comput:19,condit:6,construct:1,content:[14,15],continu:[3,9],converg:[5,12],coordin:4,copi:16,creat:16,criteria:7,data:3,deriv:[7,8,12],dimens:0,dirichlet:6,discretis:[8,11,13],document:16,edit:19,element:[0,1,4,5,8,9,11,12,13],entiti:2,epilogu:12,equat:8,error:[5,10,12],estim:5,exact:0,exam:17,exampl:[0,1],exercis:16,exot:9,expans:7,express:4,extend:0,extens:16,failur:7,fe_util:[14,15],feedback:[16,18],finit:[1,4,5,8,9,11,12,13],finite_el:14,first:8,fork:16,form:[7,11],formal:16,formul:[8,12],function_spac:14,galerkin:12,geometri:2,get:19,gist:19,git:19,github:19,global:[3,9,10],gradient:[1,5],hand:5,hell:19,helmholtz:[12,15],hilbert:11,homogen:6,how:16,implement:[0,1,2,3,4,5,6,7,8,16,17],incomplet:0,inhomogen:6,insert:5,integr:[4,8],interpol:[1,4,10,12],introduct:8,issu:[16,19],knowledg:18,l_2:8,lab:19,lagrang:1,lectur:[17,18],left:5,legendr:0,line:19,linear:[11,12],linearis:7,linux:19,local:[3,9,10,16],look:4,mac:19,machin:19,manufactur:5,map:3,mark:16,masteri:[13,15,16,18],matric:5,matrix:[5,9],matter:18,measur:10,mesh:[2,3,14],method:[5,7],mix:13,mode:7,model:7,modul:[14,15],more:9,newton:7,node:[1,3],nonlinear:7,note:[5,17],number:3,numer:[0,4,5,17],obtain:16,one:0,oper:10,other:11,our:8,own:19,packag:[14,15],paper:17,part:17,past:17,pde:12,physic:4,poisson:[8,15],polynomi:10,practic:[8,18],problem:[5,7,11,12,19],pull:[5,16],python:[0,1,2,3,4,19],quadratur:[0,4,14],rais:19,rate:5,refer:[0,2,4,5,20],reference_el:14,repositori:16,request:16,residu:7,right:5,rule:0,scheme:16,set:16,share:19,side:5,skeleton:16,sobolev:12,solut:5,solv:[1,5],solvabl:11,solver:15,some:[9,11],space:[3,4,8,9,11,12],spars:5,squar:8,stabil:11,start:19,stop:7,style:16,submit:18,submodul:[14,15],subpackag:14,tabul:1,taylor:[7,10],test:16,threshold:7,tip:16,tool:19,topic:13,toward:8,triangul:8,trick:16,two:0,type:1,unisolv:9,unit:8,updat:16,util:14,valu:[4,7],vandermond:9,variat:[11,12],venv:16,watch:16,weak:12,window:19,work:[1,16],your:[16,19]}})