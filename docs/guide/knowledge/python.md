# Python requirements.txt安装用法

## **一、什么是requirements.txt文件**

在Python项目开发中，通常需要安装多个Python包。当我们在新的项目中启动一个虚拟环境，并且想要在新的虚拟环境中安装之前的依赖包时，就可以使用requirements.txt文件来完成。这个文件包含了所有需要安装的依赖包和其版本号。

requirements.txt文件可以在项目的根目录下创建，文件名为requirements.txt。

```
#示例requirements.txt文件
pytz==2021.1
numpy==1.20.2
pandas==1.2.4

```

## **二、如何生成requirements.txt文件**

方法1：手动生成

手动生成requirements.txt文件需要根据项目中使用的依赖包和其版本号，在requirements.txt文件中一行一行地手写。

```
#手动生成requirements.txt文件
pytz==2021.1
numpy==1.20.2
pandas==1.2.4

```

方法2：使用pip freeze命令生成

使用pip freeze命令可以在当前虚拟环境中生成所有已安装的依赖包名称和版本号，再将其导出到requirements.txt文件中。

```
#在命令行中输入以下命令
pip freeze > requirements.txt

```

## **三、使用requirements.txt文件进行安装**

要使用requirements.txt文件对项目中的依赖包进行安装，可以使用以下命令：

```python
pip install -r requirements.txt
# 这个速度更快
pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

```

使用以上命令将会根据requirements.txt文件中的依赖关系，自动下载并安装所有需要的Python包。

## **四、requirements.txt文件中的常见问题**

### **1、版本号问题**

requirements.txt文件中指定的版本号可能会对包的安装产生影响。如果指定的版本号过低，可能会导致部分功能无法正常使用；如果指定的版本号过高，可能会导致与其他依赖包不兼容。

因此，在编写requirements.txt文件时，需要在保证项目正常运行的前提下，选择合适的版本号。

### **2、依赖关系问题**

requirements.txt文件中指定的依赖关系可能会影响到Python包的安装，如果依赖关系不正确，可能会导致安装失败或者与其他依赖包冲突。

在编写requirements.txt文件时，需要注意依赖关系的正确性，最好将相关冲突情况记录并在文件中说明。

### **3、缺少包问题**

如果在安装依赖包时出现错误，提示无法安装特定的Python包，可以在requirements.txt文件中添加该包名称。

当然，在添加新的Python包时，需要考虑依赖关系和版本兼容性等问题。


